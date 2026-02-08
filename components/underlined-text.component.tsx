import React from "react";

type UnderlinedTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function UnderlinedText({
  children,
  className = ""
}: UnderlinedTextProps) {
  return (
    <p className={`relative inline-block ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-px bg-current opacity-30" />
        <span className="absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 ease-out hover:w-full group-hover:w-full" />
      </span>
    </p>
  );
}
