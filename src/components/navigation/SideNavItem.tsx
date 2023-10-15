"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavbarItemProps {
  label: string;
  href: string;
  width: string;
}

const SideNavItem = ({ label, href, width }: SideNavbarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <li>
      <Link href={href}>
        <div
          className={`flex items-center border-b-[2px] cursor-pointer ${width} h-[3rem] text-lg px-4 py-1 transition ${
            isActive
              ? "border-orange-300 font-semibold bg-gradient-to-r from-orange-200 via-orange-100 to-transparent"
              : "border-orange-200"
          } ${isActive ? "opacity-90" : "opacity-60"} transition ease-[in] duration-700 hover:opacity-90
      `}
        >
          {label}
        </div>
      </Link>
    </li>
  );
};

export default SideNavItem;
