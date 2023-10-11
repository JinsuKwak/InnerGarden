import React from "react";
import SideNavItem from "./SideNavItem";

interface SideNavbarProps {
  topics: {
    label: string;
    href: string;
  }[];
}

const SideNavbar = ({ topics }: SideNavbarProps) => {
  return (
    <ul className={`flex flex-col justify-start overflow-hidden rounded-lg pr-[1rem]`}>
      {topics.map(({ label, href }, i) => {
        return <SideNavItem key={i} label={label} href={href} />;
      })}
    </ul>
  );
};

export default SideNavbar;
