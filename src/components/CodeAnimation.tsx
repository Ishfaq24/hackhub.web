import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const codeSnippets = [
  "const hackHub = () => {",
  "function buildAmazing() {",
  "import React from 'react';",
  "<div className='awesome'>",
  "npm install creativity",
  "git commit -m 'magic'",
  "console.log('Hello HackHub!');",
  "export default Innovation;",
  "await Promise.resolve(dreams);",
  "return <Future />;"
];

interface FloatingCodeProps {
  code: string;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
}

const FloatingCode = ({ code, delay, duration, startX, startY }: FloatingCodeProps) => {
  return (
    <div
      className="absolute text-primary/20 font-mono text-sm pointer-events-none select-none animate-float opacity-0"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {code}
    </div>
  );
};

export const CodeAnimation = () => {
  const [floatingElements, setFloatingElements] = useState<FloatingCodeProps[]>([]);

  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      code: codeSnippets[i % codeSnippets.length],
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <FloatingCode key={index} {...element} />
      ))}
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Pulsing dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse opacity-30" />
      <div className="absolute top-60 right-40 w-3 h-3 bg-accent rounded-full animate-pulse opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-60 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-80 right-20 w-2 h-2 bg-accent rounded-full animate-pulse opacity-25" style={{ animationDelay: '3s' }} />
    </div>
  );
};