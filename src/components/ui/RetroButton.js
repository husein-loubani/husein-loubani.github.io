import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS } from './Theme';

// Define movingGradient animation using keyframes helper
const movingGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ButtonContainer = styled(motion.button)`
  display: inline-block;
  font-family: ${FONTS.secondary};
  font-size: 0.85rem;
  padding: 0.6rem 1rem;
  margin: 0.5rem;
  color: ${props => props.color || COLORS.white};
  background-color: transparent;
  border: 2px solid ${props => props.color || COLORS.hivePrimary};
  border-radius: 0;
  position: relative;
  text-transform: uppercase;
  text-shadow: 0 0 5px ${props => props.color || COLORS.hivePrimary};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  
  /* Pixelated border with custom color */
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg, 
      ${props => props.color || COLORS.hivePrimary},
      ${props => props.secondaryColor || COLORS.hiveSecondary},
      ${props => props.color || COLORS.hivePrimary}
    );
    background-size: 200% 100%;
    z-index: -1;
    animation: ${movingGradient} 3s ease infinite;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: ${COLORS.hiveDarkBg};
    z-index: -1;
  }
  
  /* For social buttons with icons */
  svg {
    margin-right: ${props => props.iconOnly ? '0' : '8px'};
    font-size: ${props => props.iconOnly ? '1.2rem' : '1rem'};
  }
  
  /* Icon only style */
  ${props => props.iconOnly && `
    width: 42px;
    height: 42px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  
  &:hover {
    color: ${COLORS.white};
    text-shadow: 0 0 8px ${props => props.color || COLORS.hivePrimary}, 
                 0 0 12px ${props => props.secondaryColor || COLORS.hiveSecondary};
    transform: translateY(-2px);
    
    &:before {
      animation-duration: 1s;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Animation is defined with keyframes helper outside the component */
`;

const RetroButton = ({ 
  children, 
  color, 
  secondaryColor,
  iconOnly = false,
  onClick, 
  ...props 
}) => {
  return (
    <ButtonContainer
      color={color}
      secondaryColor={secondaryColor}
      iconOnly={iconOnly}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="retro-button"
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default RetroButton;