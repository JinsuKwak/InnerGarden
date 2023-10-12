import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
  entry: string;
}

const NavItem = ({ label, href, entry }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${entry}/`);

  return (
    <li>
      <Link href={href}>
        <div
          className={`text-center border-b-2 cursor-pointer max-w-[360px] min-w-[90px] min-h-[2rem] px-4 py-3 transition mt-1.4 ${
            isActive ? "border-orange-300" : "border-white"
          } ${isActive ? "opacity-90" : "opacity-60"} transition ease-[in] duration-700 hover:opacity-90
      `}
        >
          {label}
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
