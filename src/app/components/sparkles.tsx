'use client'
import React from "react";
import "../../../styles/sparkle.css";

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

const DEFAULT_COLOR = "#fff4e0";

const generateSparkle = (color = DEFAULT_COLOR): Sparkle => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(15, 25),
  style: {
    top: `${random(0, 100)}%`,
    left: `${random(0, 100)}%`,
    zIndex: 2,
  }, 
});

interface SparkleInstanceProps {
  color: string;
  size: number;
  style?: React.CSSProperties;
}

function SparkleInstance({ color, size, style }: SparkleInstanceProps) {
  return (
    <span className="sparkles-div" style={style}>
      <svg
        className="sparkle-svg"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </span>
  );
}

interface SparklesProps {
  children: React.ReactNode;
}

export default function Sparkles({ children }: SparklesProps) {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle();
      setSparkles((prev) =>
        [
          ...prev.filter((s) => now - s.createdAt < 1000),
          sparkle,
        ]
      );
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <strong className="sparkles-wrapper">
      {sparkles.map((s) => (
        <SparkleInstance
          key={s.id}
          color={s.color}
          size={s.size}
          style={s.style}
        />
      ))}
      {children}
    </strong>
  );
}
