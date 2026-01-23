import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaFileAlt, FaLinkedin, FaMedium } from 'react-icons/fa';
import { BiCodeAlt, BiData, BiChip, BiAtom, BiMath, BiBrain, BiTerminal, BiCloud } from 'react-icons/bi';
import { SiGooglescholar } from 'react-icons/si';
import { COLORS, FONTS } from '../ui/Theme';
import TerminalButton from '../ui/TerminalButton';
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiSolidCarMechanic } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import { TbPhotoSensor2 } from "react-icons/tb";
import { SiImagedotsc } from "react-icons/si";
import { BsImageAlt } from "react-icons/bs";

import { FaRobot } from "react-icons/fa";  // For Robotics
import { MdImageSearch } from "react-icons/md";  // For 3D Reconstruction
const animations = {
  // Flicker animation with will-change hint for better rendering
  flicker: keyframes`
    0%, 91%, 93.5%, 95%, 100% { opacity: 1; }
    92% { opacity: 0.8; }
    94% { opacity: 0.9; }
    96% { opacity: 0.4; }
    97% { opacity: 0.9; }
    98% { opacity: 0.7; }
    99% { opacity: 0.8; }
  `,
  
  // Title bounce animation
  titleBounce: keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  `,
  
  // Film displacement animation
  filmDisplacement: keyframes`
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(0.7px, 0); }
    20% { transform: translate(-0.5px, 0.5px); }
    30% { transform: translate(0, 0); }
    40% { transform: translate(0.3px, -0.3px); }
    50% { transform: translate(0, 0); }
    60% { transform: translate(-0.7px, 0.3px); }
    70% { transform: translate(0.5px, 0.5px); }
    80% { transform: translate(0, 0); }
    90% { transform: translate(-0.3px, -0.6px); }
  `,
  
  // Logo hover animation
  hoverRightLeft: keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(15px); }
    100% { transform: translateX(0); }
  `
};

// Responsive design constants
const DIMENSIONS = {
  BANNER_PADDING_DESKTOP: 12,
  BANNER_PADDING_MOBILE: 11,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024
};

/**
 * Main header container
 * Full-viewport height with centered content layout
 * Contains name display, job title, and navigation elements
 */
const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden; /* Prevents content overflow */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Appropriate stacking context */
  
  /* Tablet styling - optimized for performance */
  @media (min-width: ${DIMENSIONS.MOBILE_BREAKPOINT + 1}px) and (max-width: ${DIMENSIONS.TABLET_BREAKPOINT}px) {
    height: 100vh;
    justify-content: center;
    contain: layout style; /* Performance optimization */
  }
  
  /* Mobile styling with contain property for performance */
  @media (max-width: ${DIMENSIONS.MOBILE_BREAKPOINT}px) {
    height: 100vh; 
    height: calc(100vh - env(safe-area-inset-bottom, 0));
    justify-content: flex-start;
    padding-top: 8vh;
    contain: layout style; /* Performance optimization */
  }
  
  /* Define the softWave animation for reuse */
  @keyframes softWave {
    0%, 100% { transform: translateY(-50%) scale(1.0); opacity: 0.7; }
    50% { transform: translateY(-50%) scale(1.1); opacity: 0.9; }
  }
  
  /* Add the glowing background effect directly to the header */F
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    background: radial-gradient(circle at center, 
      ${COLORS.retroPrimary}40,
      ${COLORS.retroSecondary}20,
      ${COLORS.retroPrimary}05,
      transparent 70%
    );
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 100%;
    opacity: 0.8;
    filter: blur(60px);
    z-index: 0;
    animation: softWave 20s infinite ease-in-out;
  }
`;


// Main content wrapper
const HeaderContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 20;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Creative vertical name layout with Hussein on left and Loubani on right - as a background to everything
const NameContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  z-index: 1;
`;

// Vertical text styling for first name with cinematic 3D effect
const FirstName = styled(motion.div)`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(6rem, 13vw, 6rem);
  font-weight: 800;
  color: #FFFFFF; /* Main color is white */
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute;
  left: 10%;
  top: 5%;
  transform-origin: left center;
  opacity: 1;
  animation: ${animations.titleBounce} 8s ease-in-out infinite, ${animations.filmDisplacement} 10s linear infinite;
  will-change: transform; /* Performance optimization */
  
  /* 3D effect with multiple shadows */
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* Red shadow layer */
  &:before {
    color: #E53E3E; /* Red */
    transform: translate(-5px, 5px);
    z-index: -3;
    animation: ${animations.flicker} 8s infinite;
  }
  
  /* Blue shadow layer */
  &:after {
    color: #3182CE; /* Blue */
    transform: translate(5px, -5px);
    z-index: -2;
    animation: ${animations.flicker} 12s infinite;
  }
  
  /* media query for smaller laptop screens */
  @media (max-height: 900px) and (min-width: 1025px) {
    font-size: clamp(10rem, 12vh, 12rem);
  }
  
  /* Tablet styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(8rem, 10vh, 10rem);
    transform: none;
    writing-mode: horizontal-tb;
    margin-right: 0;
    letter-spacing: -0.2rem;
    left: 18%;
    top: 8%;
    transform-origin: center;
    z-index: 5;
  }
  
  /* Mobile styling */
  @media (max-width: 768px) {
    font-size: clamp(5rem, 6vh, 6rem);
    transform: rotate(-90deg);
    writing-mode: horizontal-tb;
    margin-right: 0;
    letter-spacing: -0.2rem;
    left: 10%;
    top: 20%; 
    transform-origin: center;
    z-index: 5;
  }
`;

const LastName = styled(motion.div)`
  font-family: 'Impact', 'Anton', ${FONTS.title};
  font-size: clamp(6rem, 13vw, 6rem);
  font-weight: 800;
  color: #FFFFFF; /* Main color is white */
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.5rem;
  line-height: 0.85;
  position: absolute; /* Absolute so it moves with the header */
  right: 10%;
  top: 5%;
  z-index: 15;
  opacity: 1;
  transform-origin: right center;
  animation: ${animations.titleBounce} 8s ease-in-out infinite, ${animations.filmDisplacement} 12s linear infinite;
  will-change: transform; /* Performance optimization */
  
  /* 3D effect with multiple shadows */
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* Red shadow layer */
  &:before {
    color: #E53E3E; /* Red */
    transform: translate(5px, 5px);
    z-index: -3;
    animation: ${animations.flicker} 10s infinite;
  }
  
  /* Blue shadow layer */
  &:after {
    color: #3182CE; /* Blue */
    transform: translate(-5px, -5px);
    z-index: -2;
    animation: ${animations.flicker} 15s infinite;
  }
  
  /* media query for smaller laptop screens */
  @media (max-height: 900px) and (min-width: 1025px) {
    font-size: clamp(7rem, 9vh, 8rem);
  }
  
  /* Tablet styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(8rem, 10vh, 10rem);
    transform: none;
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
    left: auto;
    right: 18%;
    top: 8%;
    z-index: 5;
    transform-origin: center;
  }
  
  /* Mobile styling */
  @media (max-width: 768px) {
    font-size: clamp(5rem, 6vw, 6rem);
    transform: rotate(90deg);
    writing-mode: horizontal-tb;
    margin-left: 0;
    letter-spacing: -0.2rem;
    right: 10%;
    top: 20%; 
    z-index: 5;
    transform-origin: center;
  }
`;

// electrified text with creative shadow placement
const MachineLoehrning = styled(motion.div)`
  font-family: ${FONTS.mono};
  font-size: clamp(3.8rem, 4.5vw, 2.8rem);
  color: ${COLORS.retroPrimary};
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-transform: uppercase;
  padding: 0.5rem 0.8rem;
  display: inline-block;
  z-index: 20;
  
  /* Tablet styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: clamp(2.5rem, 3vw, 2.2rem);
    margin-bottom: 1.5rem;
  }
  
  /* Base text glow */
  text-shadow: 0 0 8px ${COLORS.retroPrimary}40;
  
  /* Single shifted shadow effect */
  &:before {
    content: 'Hussein Loubani';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 100%;
    height: 100%;
    z-index: -1;
    color: ${COLORS.retroTertiary};
    opacity: 0.6;
    filter: blur(1px);
  }
  
  /* Unique ASCII-art inspired bracket design - digital hipster aesthetic */
  &:after {
    content: '{PhD Researcher @ CIAD}';
    position: absolute;
    bottom: -18px;
    left: 22%; 
    font-family: ${FONTS.mono};
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    color: ${COLORS.retroPrimary};
    opacity: 0.85;
    text-shadow: 0 0 8px ${COLORS.retroPrimary}40;
  }
    
  /* Sporadic electrical flicker - step animation for authentic feel */
  animation: textFlicker 5s infinite steps(1);
  
  @keyframes textFlicker {
    0%, 100% { 
      color: ${COLORS.retroPrimary};
      text-shadow: 0 0 8px ${COLORS.retroPrimary}40; 
    }
    88%, 92% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 0 transparent;
    }
    90% { 
      color: ${COLORS.retroPrimary}50; 
      text-shadow: 0 0 0 transparent;
    }
    93%, 95% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 10px ${COLORS.retroPrimary};
    }
    94% { 
      color: ${COLORS.retroPrimary}60; 
      text-shadow: 0 0 0 transparent;
    }
    25%, 27% { 
      color: ${COLORS.retroPrimary}; 
      text-shadow: 0 0 5px ${COLORS.retroPrimary}80;
    }
    26% { 
      color: ${COLORS.retroPrimary}70; 
      text-shadow: 0 0 0 transparent;
    }
  }
  
  /* Hover effect with more artistic shadow behavior */
  &:hover {
    animation: hoverFlicker 1s infinite steps(1);
    
    @keyframes hoverFlicker {
      0%, 100% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      49% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      50% { 
        color: ${COLORS.retroPrimary}30;
        text-shadow: none; 
      }
      51% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      75%, 77% { 
        color: ${COLORS.retroPrimary};
        text-shadow: 0 0 10px ${COLORS.retroPrimary}; 
      }
      76% { 
        color: ${COLORS.retroPrimary}50;
        text-shadow: none; 
      }
    }
    
    /* More dynamic shadow positions on hover */
    &:before {
      animation: lineGlitch 1s infinite, shadowJumpHover 0.5s infinite steps(1);
      
      @keyframes shadowJumpHover {
        0%, 100% { text-shadow: 5px 5px 0 ${COLORS.retroTertiary}; }
        20% { text-shadow: 3px 4px 0 ${COLORS.retroTertiary}; }
        40% { text-shadow: 6px 3px 0 ${COLORS.retroTertiary}; }
        60% { text-shadow: 4px 6px 0 ${COLORS.retroTertiary}; }
        80% { text-shadow: 3px 3px 0 ${COLORS.retroTertiary}; }
      }
    }
    
    &:after {
      animation: lineGlitchAlt 2s infinite, shadowJumpAltHover 0.7s infinite steps(1);
      
      @keyframes shadowJumpAltHover {
        0%, 100% { text-shadow: -5px -5px 0 ${COLORS.synthPurple}; }
        20% { text-shadow: -4px -3px 0 ${COLORS.synthPurple}; }
        40% { text-shadow: -6px -4px 0 ${COLORS.synthPurple}; }
        60% { text-shadow: -3px -6px 0 ${COLORS.synthPurple}; }
        80% { text-shadow: -4px -4px 0 ${COLORS.synthPurple}; }
      }
    }
  }
  
  /* Floating logo to the right of text */
  .floating-logo {
    margin-left: 20px;
    height: 60px;
    animation: ${animations.hoverRightLeft} 8s ease-in-out infinite;
  }
`;

const RunningBanner = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: ${DIMENSIONS.BANNER_PADDING_DESKTOP}px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Desktop styling with GPU acceleration */
  @media (min-width: ${DIMENSIONS.TABLET_BREAKPOINT + 1}px) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
    transform: translateZ(0); /* Force GPU acceleration */
    will-change: transform; /* Optimization hint */
  }
  
  /* Tablet styling with performance optimizations */
  @media (min-width: ${DIMENSIONS.MOBILE_BREAKPOINT + 1}px) and (max-width: ${DIMENSIONS.TABLET_BREAKPOINT}px) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
    padding: ${DIMENSIONS.BANNER_PADDING_DESKTOP - 2}px 0;
    transform: translateZ(0); /* Force GPU acceleration */
    will-change: transform; /* Optimization hint */
  }
  
  /* Mobile styling with performance optimizations */
  @media (max-width: ${DIMENSIONS.MOBILE_BREAKPOINT}px) {
    padding: ${DIMENSIONS.BANNER_PADDING_MOBILE}px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    height: auto;
    transform: translateZ(0); /* Force GPU acceleration */
    will-change: transform; /* Optimization hint */
  }
  
  /* Gradient fade edges for smooth scroll */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0) 5%, 
        rgba(255, 255, 255, 0) 95%, 
        rgba(255, 255, 255, 1) 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  /* Data line accent */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${COLORS.dataBlue},
      ${COLORS.dataCyan},
      ${COLORS.dataPink}
    );
    opacity: 0.8;
  }
`;

const BannerContent = styled.div`
  display: inline-block;
  animation: marquee 24s linear infinite;
  padding-left: 100%;
  font-family: ${FONTS.mono};
  color: ${COLORS.dataDark};
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @keyframes marquee {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }
  
  span {
    margin: 0 20px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    
    svg {
      margin-right: 8px;
      color: ${COLORS.dataBlue};
    }
    
    &:hover {
      color: ${COLORS.dataPink};
      
      svg {
        color: ${COLORS.dataPink};
      }
    }
  }
  
  /* Data flow indicator - subtle animation */
  .blink {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: ${COLORS.dataPink};
      border-radius: 50%;
      animation: dataPulse 2s infinite alternate;
    }
    
    @keyframes dataPulse {
      0% { transform: translateY(-50%) scale(1); opacity: 0.7; }
      100% { transform: translateY(-50%) scale(1.5); opacity: 0.3; }
    }
  }
`;

// Terminal job title
const JobTitle = styled(motion.div)`
  color: ${COLORS.white};
  font-size: 1.4rem;
  margin: 1.5rem 0;
  font-family: ${FONTS.mono};
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: ${COLORS.retroDarkAccent};
  padding: 8px 16px;
  border: 1px solid ${COLORS.retroPrimary}40;
  border-radius: 0;
  box-shadow: 3px 3px 0 ${COLORS.retroPrimary}30;
  
  /* Typewriter cursor - retro terminal look */
  span.cursor {
    display: inline-block;
    width: 12px;
    height: 20px;
    background: ${COLORS.retroPrimary};
    margin-left: 4px;
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  }
  
  /* Terminal prompt style */
  span.command {
    color: ${COLORS.retroPrimary};
    font-weight: 500;
    margin-right: 8px;
    opacity: 0.9;
  }
  
  /* Retro hover effect */
  transition: all 0.2s ease;
  transform-origin: center;
  
  &:hover {
    transform: scale(1.02) translateY(-2px);
    box-shadow: 5px 5px 0 ${COLORS.retroPrimary}50;
  }
  
  &:active {
    transform: scale(0.98) translateY(0);
    box-shadow: 2px 2px 0 ${COLORS.retroPrimary}30;
  }
`;

// Social links container 
const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 2.5rem 0;
  flex-wrap: wrap;
  max-width: 900px;
  
  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 0.9rem;
    margin: 1.8rem 0;
  }
  
  @media (max-width: 768px) {
    gap: 0.7rem;
  }
`;

// Explore button container
const ButtonsContainer = styled(motion.div)`
  margin-top: 2rem;
`;


const Header = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const centerContentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); 
  
  // Fade animations for header elements
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // State for responsive design with optimized resize handling
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [shouldShowPikachu, setShouldShowPikachu] = useState(false);
  const [pikachuImage, setPikachuImage] = useState(null);
  
  // Optimization: debounced resize handler with requestAnimationFrame
  useEffect(() => {
    let frameId = null;
    
    const handleResize = () => {
      // Cancel any pending frame
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      
      // Schedule resize calculation in next animation frame for performance
      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const newIsMobile = width <= DIMENSIONS.MOBILE_BREAKPOINT;
        const newIsTablet = width > DIMENSIONS.MOBILE_BREAKPOINT && width <= DIMENSIONS.TABLET_BREAKPOINT;
        
        setIsMobile(newIsMobile);
        setIsTablet(newIsTablet);
        
        // Only show Pikachu on desktop (not mobile or tablet)
        setShouldShowPikachu(!newIsMobile && !newIsTablet);
      });
    };
    
    // Initial setup
    handleResize();
    
    // Add event listener with passive flag for better performance
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  
  // Effect to dynamically load Pikachu image only on desktop
  useEffect(() => {
    // Only load the image when we actually need to show it (desktop only)
    if (shouldShowPikachu && !pikachuImage) {
      // Create a new image object and set it to state only when loaded
      const img = new Image();
      img.onload = () => {
        setPikachuImage(`${process.env.PUBLIC_URL}/images/pikachu.png`);
      };
      img.src = `${process.env.PUBLIC_URL}/images/pikachu.png`;
    }
  }, [shouldShowPikachu, pikachuImage]);

  // Terminal typewriter effect with optimized implementation
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Autonomous Driving';
  
  // Optimized typewriter effect with memoized timeout reference
  useEffect(() => {
    let timeoutId = null;
    
    if (typedText.length < fullText.length) {
      // Use RAF for smoother animation in high-load situations
      timeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        });
      }, 150);
    }
    
    // Cleanup function to prevent memory leaks
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [typedText, fullText]);
  
  // Optimized cursor blinking with reduced repaints
  useEffect(() => {
    // Use more efficient toggle approach
    const intervalId = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Memoized banner content to prevent re-creation on every render
  const bannerItems = useMemo(() => [
    { text: "Artificial Intelligence", icon: <GiArtificialIntelligence />, blink: true },
    { text: "Computer Vision", icon: <TbPhotoSensor2 />, blink: true },
    { text: "Machine Learning", icon: <BiChip /> , blink: true},
    { text: "Research", icon: <GiArchiveResearch />, blink: true },
    { text: "Autonomous Driving", icon: <BiSolidCarMechanic />, blink: true },
    { text: "Robotics", icon: <FaRobot />, blink: true },
    { text: "3D Reconstruction", icon: <BsImageAlt />, blink: true },
    { text: "Data Science", blink: false, icon: <BiCodeAlt /> , blink: true},
    { text: "C/C++", blink: false, icon: <BiTerminal /> , blink: true},
    { text: "Python", blink: false, icon: <BiTerminal /> , blink: true},
    { text: "JAVA", blink: false, icon: <BiTerminal /> , blink: true},
    { text: "TensorFlow", blink: false, icon: <BiTerminal /> , blink: true},
    { text: "PyTorch", blink: false, icon: <BiTerminal /> , blink: true},
    { text: "Natural Language Processing", blink: true, icon: <BiData /> , blink: true},
    { text: "SQL Databases", blink: false, icon: <BiData/> , blink: true},  
  ]);

  
  // Optimized scroll handler with memoization
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with passive event listeners
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <HeaderContainer id="home" role="banner" aria-label="Hussein Loubani-3D Vision for Autonomous Driving">
      {/* Name display with visually hidden H1 for SEO and accessibility */}
      <NameContainer>
        {/* SEO-optimized accessible heading using proper visually hidden technique */}
        <h1 
          style={{ 
            position: 'absolute', 
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0
          }}
          aria-label="Hussein Loubani - 3D Vision for Autonomous Driving"
        >
          Hussein Loubani - AI/ML Engineer and PhD Researcher
        </h1>
        <FirstName
          aria-hidden="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          style={{ opacity: headerOpacity }}
        >
          
        </FirstName>
        
        <LastName
          aria-hidden="true"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          style={{ opacity: headerOpacity }}
        >
          
        </LastName>
      </NameContainer>
  
      {/* Header Content with centered elements */}
      <HeaderContent style={{ 
        opacity, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: isMobile ? 'flex-start' : 'center', 
        height: isMobile ? '90%' : '100%',
        paddingTop: isMobile ? '6vh' : (isTablet ? '0' : '0'),
        paddingBottom: isTablet ? '6vh' : '0',
        position: 'relative', 
        zIndex: 5 
      }}>
        {/* Center content with job title and buzzword */}
        <motion.div style={{ 
          opacity: centerContentOpacity, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          height: isMobile ? 'auto' : '100%', 
          justifyContent: isMobile ? 'flex-start' : 'center',
          marginTop: isMobile ? '15vh' : (isTablet ? '25vh' : '0') 
        }}>
          {/* Machine Loehrning */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {!isMobile && (
              <MachineLoehrning
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ 
                  margin: '1rem 0 2rem',
                  fontSize: isTablet ? 'clamp(2.6rem, 3.5vw, 2.4rem)' : 'clamp(3.8rem, 4.5vw, 2.8rem)'
                }}
              >
                Hussein Loubani
              </MachineLoehrning>
            )}
            {!isMobile && (
              <motion.img 
                src={`${process.env.PUBLIC_URL}/images/astronaut.png`}
                alt="Astronaut logo"
                loading="lazy"
                decoding="async"
                width={isTablet ? 360 : 500}
                height={isTablet ? 360 : 500}
                fetchPriority="low"
                style={{ 
                  position: 'absolute',
                  right: isTablet ? '700px' : '700px',
                  top: '10%',
                  transform: 'translateY(-50%)',
                  height: isTablet ? '360px' : '500px',
                  zIndex: 100,
                  willChange: 'transform' 
                }}
                animate={{
                  x: [0, 15, 0]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            )}
          </div>
          
          {/* Job title - with terminal style typewriter effect */}
          <JobTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              marginTop: '2.5rem',
              fontSize: '1.4rem'
            }}
          >
            <span className="command">$</span>
            {typedText}
            {cursorVisible && <span className="cursor"></span>}
          </JobTitle>
          
          {/* Social media links */}
        <nav aria-label="Social media links and resume">
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: isMobile ? '1.5rem' : (isTablet ? '3rem' : '7rem'),
              marginBottom: isMobile ? '0.5rem' : (isTablet ? '1rem' : '0'),
              gap: isTablet ? '10px' : '12px',
              maxWidth: isMobile ? '380px' : (isTablet ? '600px' : '900px'),
              flexFlow: (isMobile || isTablet) ? 'row wrap' : 'row'
            }}
          >
            <TerminalButton 
              href="https://github.com/husein-loubani" 
              aria-label="Visit Hussien's GitHub profile"
              rel="noopener noreferrer"
              icon={<FaGithub />}
            >
              GitHub
            </TerminalButton>
            <TerminalButton 
              href="https://www.linkedin.com/in/hussein-loubani/" 
              aria-label="Connect with Hussein Loubani on LinkedIn"
              rel="noopener noreferrer"
              icon={<FaLinkedin />}
            >
              LinkedIn
            </TerminalButton>
            <TerminalButton 
              href="https://medium.com/@hussein_lobs" 
              aria-label="Read Hussein Loubani's articles on Medium"
              rel="noopener noreferrer"
              icon={<FaMedium />}
            >
              Medium
            </TerminalButton>
            <TerminalButton 
              href="https://scholar.google.com/citations?user=4IiL4OEAAAAJ&hl=fr" 
              aria-label="View Hussein Loubani's research on Google Scholar"
              rel="noopener noreferrer"
              icon={<SiGooglescholar />}
            >
              Scholar
            </TerminalButton>
            <TerminalButton 
              href="https://drive.google.com/file/d/1wuHkYWU0o-4GvJ_LlB6CL9WyrrTLahAN/view?usp=sharing" 
              aria-label="Download Hussein Loubani's resume"
              icon={<FaFileAlt />}
            >
              Resume
            </TerminalButton>
          </SocialLinks>
        </nav>
        
          {/* Scroll Down Arrow */}
          <ButtonsContainer 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              marginTop: isMobile ? '8vh' : (isTablet ? '2rem' : '5rem'),
              marginBottom: isMobile ? '12vh' : (isTablet ? '12vh' : '0'),
              position: (isMobile || isTablet) ? 'relative' : 'static'
            }}
        >
          <motion.div 
            onClick={() => scrollToSection('experience')}
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <span style={{ 
              color: COLORS.retroPrimary, 
              textShadow: `0 0 5px ${COLORS.retroPrimary}`,
              marginBottom: '12px',
              fontFamily: FONTS.mono,
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              {((isMobile || isTablet) ? '' : 'Scroll Down')}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={COLORS.retroPrimary} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{
                filter: `drop-shadow(0 0 8px ${COLORS.retroPrimary})`,
                animation: 'bounce 2s infinite',
                opacity: 0.9
              }}
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </ButtonsContainer>
        </motion.div>
      </HeaderContent>

      {/* Banner - positioned at bottom for desktop, top for mobile */}
      <div style={{ 
        position: 'absolute',
        ...(isMobile 
          ? { top: 0 } // Mobile: at the top
          : { bottom: 0 }), // Desktop: at the bottom
        left: 0,
        width: '100%',
        zIndex: 50 /* Increased z-index to ensure it's above everything */
      }}>
        {/* Pikachu mascot - only rendered when shouldShowPikachu is true AND image is loaded */}
        {shouldShowPikachu && pikachuImage && (
          <img 
            src={pikachuImage}
            alt=""
            aria-hidden="true"
            loading="lazy" 
            decoding="async"
            fetchPriority="low"
            width={150}
            height={150}
            className="desktop-only-image"
            style={{
              position: 'absolute',
              bottom: '100%',
              marginBottom: '3px',
              right: '20px',
              width: '150px',
              height: 'auto',
              zIndex: 10
            }}
          />
        )}
        
        <RunningBanner
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BannerContent>
            {bannerItems.map((item, index) => (
              <span key={index} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
            {bannerItems.map((item, index) => (
              <span key={`repeat-${index}`} className={item.blink ? 'blink' : ''}>
                {item.icon} {item.text}
              </span>
            ))}
          </BannerContent>
        </RunningBanner>
      </div>
    </HeaderContainer>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(Header);
