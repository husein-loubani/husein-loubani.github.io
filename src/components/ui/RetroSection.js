import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { COLORS, FONTS } from './Theme';

// Define keyframes using the keyframes helper
const glitchAnimation = keyframes`
  0%, 95% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0.2deg);
  }
  5%, 100% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0deg);
  }
  10% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(-0.2deg);
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const SectionContainer = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`;

const titleBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${FONTS.title};
  font-size: 5.5rem; /* Larger size */
  font-weight: 900;
  color: ${COLORS.retroPrimary}; /* Main color */
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  -webkit-text-stroke: 0; /* Remove stroke */
  
  /* Real graffiti 3D style with multiple layers */
  text-shadow: none; /* Remove glow */
  
  /* Three staggered shadows for real 3D depth */
  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* First shadow layer - blue */
  &:before {
    color: #3182CE; /* Blue */
    transform: translate(-8px, 8px);
    z-index: -2;
    transition: transform 0.3s ease;
  }
  
  /* Second shadow layer - red */
  &:after {
    color: #E53E3E; /* Red */
    transform: translate(-15px, 15px);
    z-index: -3;
    transition: transform 0.3s ease;
  }
  
  /* Create one more shadow for depth with an element */
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
    transform: translate(-4px, 4px);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  
  /* Slow up and down hover animation */
  animation: ${titleBounce} 8s ease-in-out infinite;
  
  /* No background clip, more authentic */
  background: none;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

const SectionContent = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

// Grid background with 3D hip-hop style - layered on top of app grid
const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      ${props => props.color || COLORS.retroPrimary}03 0px,
      ${props => props.color || COLORS.retroPrimary}03 2px,
      transparent 2px,
      transparent 10px
    );
  z-index: 1;
  pointer-events: none;
  opacity: ${props => props.opacity || "0.15"};
  
  /* More subtle diamond pattern */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, ${props => props.color || COLORS.retroPrimary}05 25%, transparent 25%),
      linear-gradient(-45deg, ${props => props.color || COLORS.retroPrimary}05 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${props => props.color || COLORS.retroPrimary}05 75%),
      linear-gradient(-45deg, transparent 75%, ${props => props.color || COLORS.retroPrimary}05 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
    opacity: 0.3;
  }
`;

// Floating decoration element
const FloatingElement = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${COLORS.retroPrimary};
  border: 3px solid #000;
  z-index: 5;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.6;
  
  &.square {
    right: 10%;
    top: 15%;
    transform: rotate(15deg);
  }
  
  &.circle {
    left: 8%;
    bottom: 20%;
    border-radius: 50%;
    animation-delay: 1s;
  }
  
  &.triangle {
    right: 15%;
    bottom: 15%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation-delay: 2s;
  }
`;

const RetroSection = ({ 
  title, 
  children, 
  background, 
  titleColor, 
  underlineColor,
  underlineSecondary,
  glowColor,
  gridColor,
  gridOpacity,
  id,
  className,
  ...props 
}) => {
  return (
    <SectionContainer 
      id={id} 
      background={background} 
      className={className || ''} 
      {...props}
    >
      <GridBackground color={gridColor} opacity={gridOpacity} />
      
      {/* Floating decorative elements removed */}
      
      <SectionInner>
        <InView threshold={0.2} triggerOnce>
          {({ ref, inView }) => (
            <>
              {title && (
                <SectionTitle
                  ref={ref}
                  color={titleColor}
                  data-text={title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring",
                    stiffness: 100
                  }}
                  className="section-title"
                >
                  <span data-text={title}>{title}</span>
                  {title}
                </SectionTitle>
              )}
              <SectionContent
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 80
                }}
              >
                {children}
              </SectionContent>
            </>
          )}
        </InView>
      </SectionInner>
    </SectionContainer>
  );
};

export default RetroSection;