"use client";

import { MovingInput } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { memo, useState } from "react";


type Props = {
  value: string | number;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const PasswordInput = ({ label, onChange, value }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <MovingInput
          type={isVisible ? "text" : "password"}
          label={label}
          onChange={onChange}
          value={value}
        />
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={toggleVisibility}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          aria-controls="password"
        >
          {isVisible ? (
            <EyeOffIcon size={20} aria-hidden="true" />
          ) : (
            <EyeIcon size={20} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(PasswordInput);