import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  color?: string;
  isSmall?: boolean;
  icon?: IconType;
  href: string;
}

const ButtonLinkOutline: React.FC<ButtonProps> = ({ label, onClick, disabled, color, isSmall, icon: Icon, href }) => {
  color: "orange";
  return (
    <Link href={href}>
      <button
        type="submit"
        disabled={disabled}
        onClick={onClick}
        className={`
        text-orange-500
        border-orange-500
        bg-orange-400
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-xl
        transition-all
        w-full
        flex 
        items-center
        justify-center
        text-base 
        hover:text-xl
        border-2
        font-semibold
        ${isSmall ? "py-1 px-[1rem]" : "py-3 px-[2rem]"}
        ${isSmall ? "min-w-[7rem] px-[1rem]" : " min-w-[8rem] px-[2rem]"}
      `}
      >
        {Icon && <Icon size={24} className="absolute left-4 top-3" />}
        {label}
      </button>
    </Link>
  );
};

export default ButtonLinkOutline;
