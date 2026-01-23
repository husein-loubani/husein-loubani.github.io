import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

/**
 * Container for the quantum circuit animation
 * Creates a subtle network visualization overlaying the background
 */
const CircuitsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none; /* Allow clicks to pass through */
  overflow: hidden;
  opacity: 0.12; /* Subtle visual layer */
`;

/**
 * Canvas element for rendering quantum circuit animation
 * Uses hardware acceleration for smoother rendering
 */
const CircuitsCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0); /* GPU acceleration for better performance */
  will-change: transform; /* Performance optimization hint */
`;

/**
 * QuantumCircuits component
 * Renders a network of interconnected nodes with data flow animations
 * Simulates quantum circuit pathways with pulsing nodes
 */
const QuantumCircuits = () => {
  // Canvas and animation control references
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  
  // Performance optimization with frame rate limiting
  const FPS = 24; // Lower FPS than primary animation for resource efficiency
  const frameInterval = 1000 / FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance
    let width, height;
    let resizeTimeout = null;
    
    // Debounced resize handler for better performance
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }, 150); // 150ms debounce
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Circuit nodes and connections
    const nodes = [];
    const connections = [];
    const nodeCount = Math.max(5, Math.floor(width * height / 150000)); // Adjust density based on screen size
    
    // Generate nodes (quantum circuit intersections)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1.5 + Math.random() * 3,
        pulseSize: 0,
        maxPulseSize: 20 + Math.random() * 30,
        pulsing: false,
        pulseSpeed: 0.3 + Math.random() * 0.7,
        pulseDelay: 1000 + Math.random() * 15000, // Random delay before pulsing
        lastPulse: 0,
        color: Math.random() > 0.7 ? 
          `rgba(130, 90, 230, 0.8)` : // Purple
          Math.random() > 0.5 ?
            `rgba(30, 180, 220, 0.8)` : // Blue
            `rgba(0, 210, 180, 0.8)`, // Teal
        connections: []
      });
    }
    
    // Generate connections between nodes (quantum circuit paths)
    nodes.forEach((node, i) => {
      // Each node connects to 1-3 other nodes
      const connectionCount = 1 + Math.floor(Math.random() * 3);
      
      for (let j = 0; j < connectionCount; j++) {
        // Find a node to connect to (avoid connecting to self)
        const candidates = nodes.filter(n => n !== node && !node.connections.includes(n));
        
        if (candidates.length > 0) {
          // Find the closest nodes that aren't already connected
          candidates.sort((a, b) => {
            const distA = Math.hypot(node.x - a.x, node.y - a.y);
            const distB = Math.hypot(node.x - b.x, node.y - b.y);
            return distA - distB;
          });
          
          // Connect to one of the closest nodes (not always the closest for variety)
          const targetIndex = Math.min(Math.floor(Math.random() * 3), candidates.length - 1);
          const target = candidates[targetIndex];
          
          // Add to connections list
          node.connections.push(target);
          target.connections.push(node);
          
          // Create connection object
          connections.push({
            start: node,
            end: target,
            dataPoints: [],
            speed: 0.5 + Math.random() * 2,
            frequency: 500 + Math.random() * 5000, // Time between data packets
            lastDataSent: -(Math.random() * 5000), // Randomize initial timing
            direction: Math.random() > 0.5 ? 1 : -1, // Random direction
            active: Math.random() > 0.3, // Some connections start inactive
            width: 1 + Math.random()
          });
        }
      }
    });
    
    /**
     * DataPacket class
     * Represents data moving along network connections between nodes
     * Creates visual effect of information flow in the quantum network
     */
    class DataPacket {
      /**
       * Create a new data packet
       * @param {Object} connection - Connection object this packet travels on
       * @param {number} direction - Direction of travel (1 = start→end, -1 = end→start)
       * @param {number} size - Visual size of the packet
       */
      constructor(connection, direction, size = 2) {
        this.connection = connection;
        this.direction = direction;
        this.progress = direction > 0 ? 0 : 1; // Position along path (0=start, 1=end)
        this.size = size;
        this.speed = 0.003 + Math.random() * 0.006; // Randomized travel speed
        this.color = connection.start.color; // Inherit color from source node
        this.alive = true; // Tracking for removal when reaching destination
      }
      
      /**
       * Update packet position along its path
       * @param {number} timeFactor - Time normalization factor for frame-rate independence
       */
      update(timeFactor = 1) {
        // Move along the connection with normalized speed
        this.progress += this.speed * this.direction * timeFactor;
        
        // Handle packet reaching either end of the connection
        if (this.progress <= 0 || this.progress >= 1) {
          // Determine which node was reached and trigger pulse effect
          const node = this.progress <= 0 ? this.connection.start : this.connection.end;
          node.pulsing = true;
          node.pulseSize = 0;
          
          // Mark for removal from the system
          this.alive = false;
        }
      }
      
      /**
       * Render the data packet
       * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
       */
      draw(ctx) {
        const start = this.connection.start;
        const end = this.connection.end;
        
        // Calculate current position by linear interpolation
        const x = start.x + (end.x - start.x) * this.progress;
        const y = start.y + (end.y - start.y) * this.progress;
        
        // Draw the main packet circle
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add inner glow effect for visual depth
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(x, y, this.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow to avoid affecting other elements
      }
    }
    
    /**
     * Main animation loop
     * Renders and updates the quantum circuit network visualization
     * Uses frame rate limiting for consistent performance
     * 
     * @param {number} timestamp - Current animation timestamp
     */
    const animate = (timestamp) => {
      // Apply frame rate limiting to reduce CPU usage
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp - (elapsed % frameInterval);
      
      // Create fading trail effect with semi-transparent overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      
      // Calculate time factor for frame-rate independent motion
      // Ensures consistent animation speed regardless of device performance
      const timeFactor = elapsed / 16.67; // Normalized to 60fps baseline
      
      // Update and draw connections
      connections.forEach(connection => {
        const start = connection.start;
        const end = connection.end;
        
        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = `rgba(50, 130, 240, ${connection.active ? 0.3 : 0.1})`;
        ctx.lineWidth = connection.width;
        ctx.stroke();
        
        // Check if it's time to send a new data packet
        if (connection.active && timestamp - connection.lastDataSent > connection.frequency) {
          connection.lastDataSent = timestamp;
          
          // Create a new data packet
          connection.dataPoints.push(
            new DataPacket(connection, connection.direction, 1.5 + Math.random())
          );
          
          // Occasionally reverse direction
          if (Math.random() > 0.85) {
            connection.direction *= -1;
          }
        }
        
        // Update and draw data packets with time factor
        connection.dataPoints = connection.dataPoints.filter(packet => {
          if (packet.alive) {
            packet.update(timeFactor);
            packet.draw(ctx);
            return true;
          }
          return false;
        });
        
        // Randomly activate/deactivate connections
        if (Math.random() > 0.997) {
          connection.active = !connection.active;
        }
      });
      
      // Update and draw nodes
      nodes.forEach(node => {
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace('0.8', '0.6');
        ctx.fill();
        
        // Handle pulsing effect
        if (node.pulsing) {
          node.pulseSize += node.pulseSpeed * timeFactor;
          
          // Draw pulse
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.pulseSize, 0, Math.PI * 2);
          const alpha = Math.max(0, 0.5 - node.pulseSize / node.maxPulseSize);
          ctx.strokeStyle = node.color.replace('0.8', alpha.toString());
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // End pulse when it gets too big
          if (node.pulseSize > node.maxPulseSize) {
            node.pulsing = false;
            
            // Randomly activate one of its connections
            if (node.connections.length > 0 && Math.random() > 0.3) {
              const randomConnection = connections.find(c => 
                (c.start === node || c.end === node) && !c.active
              );
              
              if (randomConnection) {
                randomConnection.active = true;
              }
            }
          }
        } else if (Math.random() > 0.998) {
          // Occasionally pulse randomly
          node.pulsing = true;
          node.pulseSize = 0;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [frameInterval]); // Include frameInterval as dependency

  return (
    <CircuitsContainer>
      <CircuitsCanvas ref={canvasRef} />
    </CircuitsContainer>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(QuantumCircuits);