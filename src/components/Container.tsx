"use client";
import React from "react";
import { Container as MUIContainer } from "@mui/material";
import useIsSmall from "@/app/hooks/useIsSmall";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface ContainerProps {
  children: React.ReactNode;
  color?: string;
}

const Container = ({ children, color = "transparent" }: ContainerProps) => {
  const currentUser = getCurrentUser();
  const isSmall = useIsSmall();
  return (
    <React.Fragment>
      <MUIContainer
        // className={`${isSmall ? "w-[95vw]" : "w-[80vw]"}  ${!currentUser ? "mt-20" : ""}`}
        className={`${isSmall ? "w-[95vw]" : "w-[80vw]"} mt-20`}
        maxWidth="xl"
        style={{ background: color }}
      >
        {children}
      </MUIContainer>
    </React.Fragment>
  );
};

export default Container;
