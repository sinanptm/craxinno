import { cn } from "@/lib/utils"
import { memo } from "react";

interface LogoProps {
  className?: string
}

const  Logo = ({ className }: LogoProps = {})=> {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
            className="fill-[#FF0066]"
          />
          <path
            d="M11.5 10h3.75c2.9 0 4.75 1.85 4.75 4.5 0 2.65-1.85 4.5-4.75 4.5H11.5V10zm3.55 6.6c1.5 0 2.35-.8 2.35-2.1 0-1.3-.85-2.1-2.35-2.1h-1.2v4.2h1.2z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wider text-[#FF0066]">CRAXINNO</span>
        <span className="text-xs tracking-wider text-gray-600">TECHNOLOGIES</span>
      </div>
    </div>
  )
}

export default memo(Logo)