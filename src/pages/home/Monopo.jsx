import React, { useState, useEffect, useCallback } from 'react';

const Monopo = () => {
  const [hoveredWords, setHoveredWords] = useState(new Map());
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Organize words into lines with alignment information
  const lines = [
    {
      words: [
        { en: "We", ja: "私たち" },
        { en: "are", ja: "は" },
        { en: "a", ja: "ある" },
        { en: "brand", ja: "ブランド" },
      ],
      align: 'center'
    },

    {
      words: [
        { en: "of", ja: "の", alignWith: 'are' },
        { en: "collective", ja: "集合的な" },
      ],
      align: 'special'
    },
    {
      words: [
        { en: "creativity", ja: "創造性" },
      ],
      align: 'center'
    }
  ];

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const radius = 96;
    const elements = document.querySelectorAll('.word');
    const newHoveredWords = new Map();

    // Smooth mouse position update
    setMousePosition({
      x: clientX / window.innerWidth,
      y: clientY / window.innerHeight
    });

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const intersects = 
        clientX + radius > rect.left &&
        clientX - radius < rect.right &&
        clientY + radius > rect.top &&
        clientY - radius < rect.bottom;

      if (intersects) {
        newHoveredWords.set(index, element.dataset.word);
      }
    });

    setHoveredWords(newHoveredWords);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Primary gradient (purple/pink) */}
      <div 
        className="absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          background: 'radial-gradient(75% 75% at 50% 50%, rgba(94, 2, 244, 0.08) 0%, rgba(255, 0, 140, 0) 100%)',
          transform: `scale(2) translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px)`,
        }}
      />

      {/* Secondary gradient (cyan/blue) */}
      <div 
        className="absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 255, 240, 0.04) 0%, rgba(0, 89, 255, 0) 100%)',
          transform: `scale(2) translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
        }}
      />

      {/* Accent gradient (magenta/purple) */}
      <div 
        className="absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          background: 'radial-gradient(35% 35% at 50% 50%, rgba(255, 0, 199, 0.04) 0%, rgba(94, 2, 244, 0) 100%)',
          transform: `scale(2) translate(${(mousePosition.x - 0.5) * -25}px, ${(mousePosition.y - 0.5) * -25}px)`,
        }}
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-[1400px] text-center">
          <h1 className="text-white text-[7vw] font-[275] leading-[0.9] tracking-[-0.02em]">
            {lines.map((line, lineIndex) => (
              <div 
                key={lineIndex} 
                className={`flex items-baseline mb-2 ${
                  line.align === 'center' ? 'justify-center' : 
                  line.align === 'special' ? 'justify-center ml-[5.2em]' : ''
                }`}
              >
                {line.words.map((word, wordIndex) => {
                  const globalIndex = lines.slice(0, lineIndex).reduce((acc, curr) => acc + curr.words.length, 0) + wordIndex;
                  return (
                    <span
                      key={wordIndex}
                      className="word inline-block mx-[0.2em] transition-all duration-[400ms] ease-out"
                      style={{
                        fontFamily: hoveredWords.has(globalIndex) ? '"Noto Sans JP", sans-serif' : 'neue-haas-grotesk-display, sans-serif',
                        fontWeight: hoveredWords.has(globalIndex) ? 300 : 275,
                        fontSize: hoveredWords.has(globalIndex) ? '0.75em' : '1em',
                        opacity: 0.92,
                        willChange: 'transform, opacity',
                      }}
                    >
                      <span 
                        className="inline-block transition-transform duration-[400ms] ease-out"
                        style={{
                          transform: hoveredWords.has(globalIndex) ? 'translateY(0.05em)' : 'translateY(0)'
                        }}
                      >
                        {hoveredWords.has(globalIndex) ? word.ja : word.en}
                      </span>
                    </span>
                  );
                })}
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Monopo; 