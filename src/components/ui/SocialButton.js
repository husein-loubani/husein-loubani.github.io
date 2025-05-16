import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS } from './Theme';

const IconButtonContainer = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 38px;
  position: relative;
  color: ${props => props.color || COLORS.hivePrimary};
  background-color: transparent;
  margin: 0.5rem;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;
  font-size: 1.1rem;
  border: 2px solid ${props => props.color || COLORS.hivePrimary};
  border-radius: 0;
  text-shadow: 0 0 5px ${props => props.color || COLORS.hivePrimary};
  
  /* Pixelated shadow effect - for retro look */
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: ${props => props.color || COLORS.hivePrimary}40;
    z-index: -2;
    transition: all 0.2s ease;
  }
  
  /* Dark background fill */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${COLORS.black};
    z-index: -1;
  }
  
  /* Label next to icon */
  .button-label {
    font-family: ${FONTS.mono};
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 8px;
    opacity: 1;
    transition: all 0.3s ease;
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: ${COLORS.white};
    text-shadow: 0 0 8px ${props => props.color || COLORS.hivePrimary};
    transform: translateY(-2px) translateX(-2px);
    
    /* Shadow follows button on hover */
    &:before {
      top: 6px;
      left: 6px;
    }
    
    svg {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(0) translateX(0);
    
    &:before {
      top: 2px;
      left: 2px;
    }
  }
`;

const SocialButton = ({ 
  href, 
  icon, 
  label,
  color, 
  secondaryColor,
  ariaLabel,
  ...props 
}) => {
  return (
    <IconButtonContainer
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || label || "Social media link"}
      color={color}
      secondaryColor={secondaryColor}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon}
      {label && <span className="button-label">{label}</span>}
    </IconButtonContainer>
  );
};

export default SocialButton;