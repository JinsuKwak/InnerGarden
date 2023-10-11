"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Divider } from "@mui/material";

const Footer = () => {
  const pathName = usePathname();

  const getDate = (): string => {
    const initialDate = "2023";
    const currentDate = new Date().getFullYear().toString();

    return "© " + initialDate + " - " + currentDate;
  };

  return (
    <>
      <div className={`${pathName === "/" ? "bg-[#444]" : "bg-[#222]"} h-[1px]`}></div>
      <div className={`w-full py-4 ${pathName === "/" ? "bg-[#222] text-[#eee]" : "bg-[#fff] text-[#000]"}`}>
        <div className="flex">
          <div className="text-sm pl-[2rem]">
            <span>{getDate()}</span>
          </div>
          <div className="text-sm pl-[0.5rem]">
            <span>{" Developed and Maintained by Jinsu Kwak"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
