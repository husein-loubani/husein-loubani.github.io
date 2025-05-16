import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import QuantumCircuits from './QuantumCircuits';

/**
 * Container for the quantum-inspired background elements
 * Fixed positioning ensures it covers the entire viewport
 */
const QuantumBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none; /* Allow clicks to pass through */
  overflow: hidden;
`;

/**
 * Canvas element for rendering digital rain effect
 * Uses hardware acceleration for better performance
 */
const QuantumCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.13; /* Subtle visibility for background effect */
  transform: translateZ(0); /* Force GPU acceleration */
  will-change: transform; /* Performance hint for browsers */
`;

/**
 * Quantum-inspired background component
 * Renders dynamic "digital rain" effect with mathematical symbols
 */
const QuantumBackground = () => {
  // Refs for canvas access and animation control
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  
  // Frame rate control for performance optimization
  const FPS = 30; // Balances visual smoothness with CPU usage
  const frameInterval = 1000 / FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance
    let width, height;
    let resizeTimeout = null;
    
    /**
     * Debounced resize handler
     * Prevents excessive canvas resizing during window resize events
     * Improves performance by delaying resize until user finishes resizing
     */
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }, 150); // 150ms throttle delay
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial canvas sizing
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    /**
     * Character sets for the digital rain effect
     * Different categories create visual variety and thematic consistency
     */
    const binaryDigits = ['0', '1']; // Binary data representation
    const quantumSymbols = ['ψ', 'Φ', 'Ω', 'σ', 'π', 'λ', 'Δ', '∇', '∫', '∑', '∞']; // Physics/math symbols
    const equations = ['E=mc²', 'ψ|H|ψ', 'h/2π', 'Δx·Δp≥ℏ/2', '|ψ⟩', '⟨φ|ψ⟩', 'e^iθ']; // Scientific formulas
    const dataTerms = ['01', '10', 'NaN', '404', 'ML', 'AI', '+1', '-1', 'px']; // Tech/data terms
    
    /**
     * Digital rain column configuration
     * Each column represents a vertical stream of falling characters
     */
    const columns = [];
    const columnCount = Math.floor(width / 20); // Character density based on screen width
    
    /**
     * Initialize columns with randomized properties
     * Creates visual variety in the animation pattern
     */
    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: i * 20, // Horizontal position
        y: Math.random() * height, // Random starting height
        speed: 0.5 + Math.random() * 1.5, // Random falling speed
        characters: [], // Will hold the characters in this column
        lastUpdate: 0, // Timestamp tracking for character changes
        updateInterval: 500 + Math.random() * 1000, // Random interval between character updates
        type: Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'binary' : 'data', // Character type
        opacity: 0.3 + Math.random() * 0.7, // Random opacity for visual depth
        length: 5 + Math.floor(Math.random() * 15) // Random column length
      });
    }
    
    /**
     * Color scheme for different character types
     * Creates visual distinction between character categories
     */
    const colorMap = {
      binary: `rgba(0, 180, 220, 0.7)`,   // Cyan blue for binary digits
      quantum: `rgba(120, 80, 220, 0.8)`, // Purple for quantum/physics symbols
      data: `rgba(220, 70, 120, 0.7)`,    // Pink for data/tech terms
      equation: `rgba(0, 220, 150, 0.8)`  // Green for scientific equations
    };
    
    // Initialize the characters for each column
    columns.forEach(column => {
      for (let i = 0; i < column.length; i++) {
        let char;
        if (column.type === 'binary') {
          char = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
        } else if (column.type === 'quantum') {
          char = quantumSymbols[Math.floor(Math.random() * quantumSymbols.length)];
        } else {
          // 20% chance to use an equation instead of data term
          if (Math.random() > 0.8) {
            char = equations[Math.floor(Math.random() * equations.length)];
            column.type = 'equation';
          } else {
            char = dataTerms[Math.floor(Math.random() * dataTerms.length)];
          }
        }
        
        column.characters.push({
          value: char,
          opacity: (1 - (i / column.length)) * column.opacity,
          size: column.type === 'equation' ? 10 : 12
        });
      }
    });

    /**
     * Main animation loop with frame rate control
     * Manages the digital rain effect rendering with performance optimization
     * @param {number} timestamp - Current animation timestamp from requestAnimationFrame
     */
    const animate = (timestamp) => {
      // Limit frame rate to improve performance
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp - (elapsed % frameInterval);
      
      // Apply fade effect by using semi-transparent black overlay
      // Creates trailing effect as characters fall
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw each column
      columns.forEach(column => {
        // Move the column downward
        column.y += column.speed * (elapsed / 16.67); // Normalize motion by frame time (60fps base)
        
        // Reset column position when it goes out of viewport
        if (column.y > height + column.length * 20) {
          column.y = -column.length * 20;
          column.speed = 0.5 + Math.random() * 1.5;
          
          // Occasionally change column type
          if (Math.random() > 0.95) {
            column.type = Math.random() > 0.7 ? 'quantum' : Math.random() > 0.5 ? 'binary' : 'data';
            
            // Refresh characters based on new type
            column.characters.forEach((char, index) => {
              if (column.type === 'binary') {
                char.value = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
              } else if (column.type === 'quantum') {
                char.value = quantumSymbols[Math.floor(Math.random() * quantumSymbols.length)];
              } else {
                if (Math.random() > 0.8) {
                  char.value = equations[Math.floor(Math.random() * equations.length)];
                  column.type = 'equation';
                } else {
                  char.value = dataTerms[Math.floor(Math.random() * dataTerms.length)];
                }
              }
              
              char.size = column.type === 'equation' ? 10 : 12;
            });
          }
        }
        
        // Check if it's time to update characters
        if (timestamp - column.lastUpdate > column.updateInterval) {
          column.lastUpdate = timestamp;
          
          // Randomly change one character in the column
          const randomIndex = Math.floor(Math.random() * column.characters.length);
          const char = column.characters[randomIndex];
          
          if (column.type === 'binary') {
            char.value = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
          } else if (column.type === 'quantum') {
            char.value = quantumSymbols[Math.floor(Math.random() * quantumSymbols.length)];
          } else if (column.type === 'equation') {
            // 10% chance to change from equation to another type
            if (Math.random() > 0.9) {
              char.value = Math.random() > 0.5 ? 
                binaryDigits[Math.floor(Math.random() * binaryDigits.length)] : 
                dataTerms[Math.floor(Math.random() * dataTerms.length)];
              column.type = Math.random() > 0.5 ? 'binary' : 'data';
            } else {
              char.value = equations[Math.floor(Math.random() * equations.length)];
            }
          } else {
            // 10% chance to change to equation
            if (Math.random() > 0.9) {
              char.value = equations[Math.floor(Math.random() * equations.length)];
              column.type = 'equation';
            } else {
              char.value = dataTerms[Math.floor(Math.random() * dataTerms.length)];
            }
          }
          
          char.size = column.type === 'equation' ? 10 : 12;
        }
        
        // Draw each character in the column
        column.characters.forEach((char, index) => {
          const y = column.y - index * 20;
          
          // Only draw if visible
          if (y > -20 && y < height + 20) {
            ctx.font = `${char.size}px "SF Mono", Consolas, monospace`;
            ctx.fillStyle = colorMap[column.type].replace(')', `, ${char.opacity})`);
            
            // First character gets a subtle glow effect
            if (index === 0) {
              ctx.shadowColor = colorMap[column.type];
              ctx.shadowBlur = 10;
              ctx.fillStyle = colorMap[column.type].replace(')', `, ${char.opacity * 1.3})`);
            } else {
              ctx.shadowBlur = 0;
            }
            
            ctx.fillText(char.value, column.x, y);
          }
        });
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
    <QuantumBackgroundContainer>
      <QuantumCanvas ref={canvasRef} />
      <QuantumCircuits />
    </QuantumBackgroundContainer>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(QuantumBackground);