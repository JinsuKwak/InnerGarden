"use client";
import React from "react";
import { Container as MUIContainer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useIsSmall from "@/app/hooks/useIsSmall";

const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isSmall = useIsSmall();
  return (
    <React.Fragment>
      <MUIContainer className={`${isSmall ? "w-[95vw]" : "w-[80vw]"} mt-20`} maxWidth="xl">
        {children}
      </MUIContainer>
    </React.Fragment>
  );
};

export default Container;
