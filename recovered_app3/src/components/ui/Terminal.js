import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS } from './Theme';

const TerminalContainer = styled(motion.div)`
  background-color: ${COLORS.retroDarkBg};
  border: 1px solid ${COLORS.retroPurple};
  border-radius: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  font-family: ${FONTS.mono};
  
  /* Pixelated corner effects */
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    background: ${COLORS.retroDarkBg};
    border-left: 1px solid ${COLORS.retroPurple};
    border-bottom: 1px solid ${COLORS.retroPurple};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    z-index: 10;
  }
`;

const TerminalHeader = styled.div`
  background: linear-gradient(90deg, 
    ${COLORS.retroPurple}80, 
    ${COLORS.retroTeal}80
  );
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  
  /* Pixelated texture */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.5;
  }
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    
    &:nth-child(1) {
      background: ${COLORS.retroPrimary};
    }
    
    &:nth-child(2) {
      background: ${COLORS.retroSecondary};
    }
    
    &:nth-child(3) {
      background: ${COLORS.retroGreen};
    }
    
    /* Add pixelated border */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }
  }
`;

const TerminalTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: ${COLORS.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${FONTS.secondary};
  text-shadow: 0 0 5px ${COLORS.retroPurple};
`;

const TerminalContent = styled.div`
  padding: 20px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  max-height: 500px;
  overflow-y: auto;
  position: relative;
  
  /* Scanline effect removed */
  
  /* Styling for the blinking cursor */
  .cursor {
    display: inline-block;
    width: 10px;
    height: 18px;
    background: ${COLORS.retroTeal};
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .command {
    color: ${COLORS.retroTeal};
    font-weight: bold;
  }
  
  .path {
    color: ${COLORS.retroPrimary};
  }
  
  .prompt {
    color: ${COLORS.retroPurple};
  }
  
  .result {
    color: ${COLORS.white};
    margin: 0.5rem 0 1.5rem;
    opacity: 0.9;
  }
  
  .highlight {
    color: ${COLORS.retroSecondary};
    font-weight: bold;
  }
`;

const Terminal = ({ commands, title = "terminal" }) => {
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    if (commands.length === 0) return;
    
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      
      if (currentCharIndex < currentCommand.command.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, 50); // Typing speed
        
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedCommands(prev => [
            ...prev, 
            {
              ...currentCommand,
              isTyping: false, 
              isComplete: true
            }
          ]);
          setCurrentCommandIndex(currentCommandIndex + 1);
          setCurrentCharIndex(0);
        }, 500); // Pause after typing
        
        return () => clearTimeout(timer);
      }
    }
  }, [commands, currentCommandIndex, currentCharIndex]);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  return (
    <TerminalContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="terminal"
    >
      <TerminalHeader>
        <TerminalDots>
          <span></span>
          <span></span>
          <span></span>
        </TerminalDots>
        <TerminalTitle>{title}</TerminalTitle>
      </TerminalHeader>
      
      <TerminalContent>
        {displayedCommands.map((cmd, index) => (
          <div key={index}>
            <div>
              <span className="prompt">λ</span> <span className="path">~/hussein-louabni</span> <span className="command">{cmd.command}</span>
            </div>
            {cmd.isComplete && (
              <div className="result">{cmd.result}</div>
            )}
          </div>
        ))}
        
        {currentCommandIndex < commands.length && (
          <div>
            <span className="prompt">λ</span> <span className="path">~/hussein-loubani</span> <span className="command">
              {commands[currentCommandIndex].command.substring(0, currentCharIndex)}
            </span>
            {showCursor && <span className="cursor"></span>}
          </div>
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
