import React from "react";
import Link from "next/link";
import { colors } from "@/app/colors";
import NavItem from "./NavItem";
// import { signIn, signOut } from "next-auth/react";
// import { User } from "@prisma/client";

// interface NavItemsProps {
//   mobile?: boolean;
//   currentUser?: null;
// }

const navPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Join Us", href: "/join" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

// const NavItems = ({ mobile, currentUser }: NavItemProps) => {
const NavItems = () => {
  return (
    <ul
      className={`text-sm flex items-center uppercase w-[70vw] mr-[2vw] ml-[2vw] overflow-hidden text-neutral-900 justify-start`}
    >
      {navPages.map(({ label, href }, i) => {
        return <NavItem key={i} label={label} href={href} />;
      })}
    </ul>
  );
};

export default NavItems;
