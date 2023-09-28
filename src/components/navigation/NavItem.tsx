import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li
      className={`text-center border-b-2 cursor-pointer max-w-[360px] min-w-[90px] min-h-[2rem] px-4 py-3 transition mt-1.4 ${
        isActive ? "border-orange-300" : "border-white"
      } ${isActive ? "opacity-90" : "opacity-60"}
      `}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
