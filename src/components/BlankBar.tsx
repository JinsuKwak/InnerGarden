import { Box } from "@mui/material";
import React from "react";

interface BlankBarProps {
  color?: string;
  height?: string;
}
const BlankBar = ({ color, height }: BlankBarProps) => {
  return <Box className={`w-full ${color ? color : "bg-white"}  ${height ? height : "h-[3rem]"}`}></Box>;
};

export default BlankBar;
