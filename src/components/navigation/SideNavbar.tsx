import React from "react";
import SideNavItem from "./SideNavItem";

interface SideNavbarProps {
  topics: {
    label: string;
    href: string;
  }[];

  width?: string;
  isSmall?: boolean;
}

const SideNavbar = ({ topics, width = "w-[12.8rem]", isSmall = false }: SideNavbarProps) => {
  return (
    <ul className={`flex flex-col justify-start overflow-hidden rounded-lg ${isSmall ? "" : "pr-[1rem]"}`}>
      {topics.map(({ label, href }, i) => {
        return <SideNavItem key={i} label={label} href={href} width={width} />;
      })}
    </ul>
  );
};

export default SideNavbar;
