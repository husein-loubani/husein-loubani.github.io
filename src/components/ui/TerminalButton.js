import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { COLORS, FONTS } from "./Theme";
import { FaGithub, FaLinkedin, FaMedium, FaGraduationCap, FaInstagram, FaFileAlt } from "react-icons/fa";

// TV static noise effect
const staticNoise = keyframes`
  0%, 100% { background-position: 0% 0%; }
  20% { background-position: 20% 20%; }
  40% { background-position: 40% 40%; }
  60% { background-position: 60% 60%; }
  80% { background-position: 80% 80%; }
`;

// Old TV horizontal scan wave
const scanWave = keyframes`
  0% { top: -5px; }
  100% { top: 100%; }
`;

// CRT flicker effect
const crtFlicker = keyframes`
  0%, 95% { opacity: 1; }
  96% { opacity: 0.8; }
  97% { opacity: 0.9; }
  98% { opacity: 0.8; }
  100% { opacity: 1; }
`;

// Retro terminal-style button with bottom-right shadow
const RetroButtonContainer = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0; /* Vertical padding only */
  width: 120px; /* Fixed width for all buttons */
  height: 42px; /* Fixed height for all buttons */
  background-color: #000000; /* Black background */
  border: 1px solid #FFFFFF; /* White border */
  border-radius: 0; /* Rectangular shape */
  color: #FFFFFF; /* White text */
  font-family: ${FONTS.secondary};
  font-size: 15px; /* Consistent font size */
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  margin: 5px; /* Reduced margin for consistent spacing */
  position: relative;
  transition: all 0.2s ease;
  overflow: hidden; /* Contains the wave effect */
  
  /* Retro bottom-right shadow (white) */
  box-shadow: 3px 3px 0 #FFFFFF;
  animation: ${crtFlicker} 5s infinite;
  
  /* CRT horizontal scan line - more visible now */
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    z-index: 2;
    opacity: 0.15;
    animation: ${scanWave} 4s infinite linear;
  }
  
  /* CRT scanlines overlay */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #FFFFFF;
    
    /* More intense effects on hover */
    &:before {
      height: 7px;
      opacity: 0.25;
      animation-duration: 2s;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      );
    }
    
    /* More visible scanlines on hover */
    &:after {
      background: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.08) 1px,
        transparent 1px,
        transparent 2px
      );
    }
    
    /* Faster flicker on hover */
    animation: ${crtFlicker} 1s infinite;
  }
  
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 #FFFFFF;
  }
  
  /* Icon styling */
  svg {
    margin-right: 8px;
    font-size: 16px; /* Consistent icon size */
    position: relative;
    z-index: 3;
  }
`;

const RetroButton = ({ children, href, onClick, icon, ...props }) => {
  return (
    <RetroButtonContainer
      href={href}
      onClick={onClick}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {icon && icon}
      {children}
    </RetroButtonContainer>
  );
};

// Predefined buttons for common platforms
export const GitHubButton = ({ href }) => (
  <RetroButton 
    href={href || "https://github.com/"} 
    icon={<FaGithub />}
  >
    GitHub
  </RetroButton>
);

export const LinkedInButton = ({ href }) => (
  <RetroButton 
    href={href || "https://www.linkedin.com/"} 
    icon={<FaLinkedin />}
  >
    LinkedIn
  </RetroButton>
);

export const MediumButton = ({ href }) => (
  <RetroButton 
    href={href || "https://medium.com"} 
    icon={<FaMedium />}
  >
    Medium
  </RetroButton>
);

export const GoogleScholarButton = ({ href }) => (
  <RetroButton 
    href={href || "https://scholar.google.com/"} 
    icon={<FaGraduationCap />}
  >
    Scholar
  </RetroButton>
);

export const InstagramButton = ({ href }) => (
  <RetroButton 
    href={href || "https://www.instagram.com/"} 
    icon={<FaInstagram />}
  >
    Instagram
  </RetroButton>
);

export const ResumeButton = ({ href }) => (
  <RetroButton 
    href={href || "/images/resume.pdf"} 
    icon={<FaFileAlt />}
  >
    Resume
  </RetroButton>
);

export default RetroButton;
