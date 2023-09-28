"use client";
import React from "react";
import { Container as MUIContainer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { RESPONSIVE_SMALL } from "@/app/constants";

const Container = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <MUIContainer className={`${isSmall ? "w-[95vw]" : "w-[80vw]"} mt-20`} maxWidth="xl">
        {children}
      </MUIContainer>
    </React.Fragment>
  );
};

export default Container;
