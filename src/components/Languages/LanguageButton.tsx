import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SUPPORTED_LANGUAGE } from "@/constants";
import { RESPONSIVE_SMALL } from "@/constants";

interface LanguageButtonProps {
  code: string;
  onClick: (code: string, isActive: boolean) => void;
  isActive: boolean;
}

const LanguageButton = ({ code, onClick, isActive }: LanguageButtonProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));
  const label = code == SUPPORTED_LANGUAGE.primary.code ? SUPPORTED_LANGUAGE.primary : SUPPORTED_LANGUAGE.secondary;

  return (
    <span
      className={`h-auto  cursor-pointer transition-all ${isActive ? "opacity-100" : "opacity-70"}`}
      onClick={() => onClick(code, isActive)}
    >
      {`${isSmall ? label.code : label.lang}`}
    </span>
  );
};

export default LanguageButton;
