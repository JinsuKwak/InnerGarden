"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const getDate = (): string => {
    const initialDate = "2023";
    const currentDate = new Date().getFullYear().toString();

    return "© " + initialDate + " - " + currentDate;
  };

  return (
    <>
      <div className={`${pathName === "/" ? "bg-[#444]" : "bg-[#777]"} h-[1px] pt-[1px]`}></div>
      <div className={`w-full py-4 ${pathName === "/" ? "bg-[#222] text-[#eee]" : "bg-transparent text-[#000]"}`}>
        <div className="text-sm px-[2rem]">
          <span>{getDate() + " Developed and Maintained by Jinsu Kwak"}</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
