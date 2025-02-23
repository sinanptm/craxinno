import { cn } from "@/lib/utils";
import { memo } from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps = {}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M70 30 C40 30, 30 40, 30 50 C30 60, 40 70, 70 70"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-[#FF1493]"
            fill="none"
          />
          <path
            d="M45 45 L65 65"
            strokeWidth="8"
            strokeLinecap="round"
            className="stroke-[#FF1493]"
          />
          <path
            d="M55 65 L75 65"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-[#FF6B6B]"
          />
          <path
            d="M65 50 L65 80"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-[#FF6B6B]"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span 
          className="text-xl font-bold tracking-wider bg-gradient-to-r from-[#FF1493] to-[#FF6B6B] bg-clip-text text-transparent"
        >
          CRAXINNO
        </span>
        <span 
          className="text-xs tracking-wider font-medium bg-gradient-to-r from-[#FF1493] to-[#FF6B6B] bg-clip-text text-transparent"
        >
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

export default memo(Logo);