"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import useIsSmall from "@/app/hooks/useIsSmall";
import { IconType } from "react-icons";

interface MainSummaryProps {
  label: string;
  subLabel: string;
  icon: IconType;
  isFirstChild?: boolean;
}

const MainSummary = ({ label, subLabel, icon: Icon, isFirstChild = false }: MainSummaryProps) => {
  const isSmall = useIsSmall();

  return (
    <div className={`flex flex-col ${isSmall && !isFirstChild ? "pt-[5rem]" : ""}`}>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Box sx={{ mb: 3, position: "relative" }}>
            <Fab
              className={`${isSmall ? "h-[4rem] w-[4rem]" : "h-[6rem] w-[6rem]"} bg-orange-400 hover:bg-orange-300`}
              onClick={() => {}}
            >
              <Icon size={`${isSmall ? "30" : "40"}`} className={`text-white`} />
            </Fab>
          </Box>
        </div>
        <div className={`${isSmall ? "font-semibold text-xl" : "font-bold text-2xl"}`}>
          <span>{label}</span>
        </div>
      </div>
      <div
        className={`${
          isSmall ? "text-sm" : "text-base"
        } pt-[2rem] w-[15rem] flex justify-center items-center text-center`}
      >
        <span>{subLabel}</span>
      </div>
    </div>
  );
};

export default MainSummary;
