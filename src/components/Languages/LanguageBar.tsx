"use client";
import React from "react";
import { useState } from "react";
import { SUPPORTED_LANGUAGE } from "@/app/constants";
import LanguageButton from "./LanguageButton";
import { useTheme } from "@mui/material/styles";

const LanguageBar = () => {
  const [primary, setPrimary] = useState(true);
  const [secondary, setSecondary] = useState(false);
  const onClickHandler = (code: string, isActive: boolean) => {
    setPrimary(!primary);
    setSecondary(primary);
  };

  return (
    <div className="w-[100%] h-[3rem] bg-white flex items-center justify-end">
      <div className="flex justify-end h-fit items-center text-center align-middle text-sm">
        <LanguageButton code={SUPPORTED_LANGUAGE.primary.code} onClick={onClickHandler} isActive={primary} />
        <div>{"|"}</div>
        <LanguageButton code={SUPPORTED_LANGUAGE.secondary.code} onClick={onClickHandler} isActive={secondary} />
      </div>
    </div>
  );
};

export default LanguageBar;
