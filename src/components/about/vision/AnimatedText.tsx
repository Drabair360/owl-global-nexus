
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Utility function to wrap each character in a span for individual animation
  const wrapLettersInSpans = (text: string, className: string = '') => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block ${className}`}
        style={{
          '--char-index': index,
        } as React.CSSProperties}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === textRef.current) {
          setIsVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Animation CSS */}
      <style>
        {`
        @keyframes letterCycle {
          0% { 
            transform: rotateY(0deg);
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
          }
          5% { 
            transform: rotateY(90deg);
            color: #3b82f6;
            -webkit-text-fill-color: #3b82f6;
            background: none;
            filter: none;
          }
          10% { 
            transform: rotateY(180deg);
            color: #10b981;
            -webkit-text-fill-color: #10b981;
            background: none;
            filter: none;
          }
          15% { 
            transform: rotateY(270deg);
            color: #f59e0b;
            -webkit-text-fill-color: #f59e0b;
            background: none;
            filter: none;
          }
          20% { 
            transform: rotateY(360deg);
            color: #8b5cf6;
            -webkit-text-fill-color: #8b5cf6;
            background: none;
            filter: none;
          }
          25% {
            transform: rotateY(360deg);
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
          }
          100% { 
            transform: rotateY(360deg);
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
          }
        }
        
        .gradient-text-base {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
        }
        
        .gradient-text-animated {
          font-weight: 600;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .gradient-text-animated span {
          display: inline-block;
          transform-style: preserve-3d;
          animation: letterCycle 10s infinite;
          animation-delay: calc(var(--char-index) * 0.1s);
          animation-fill-mode: both;
        }
        `}
      </style>
      
      <span 
        ref={textRef} 
        className={`font-semibold relative ${
          isVisible ? 'gradient-text-animated' : 'gradient-text-base'
        } ${className}`}
      >
        {wrapLettersInSpans(text)}
      </span>
    </>
  );
};

export default AnimatedText;
