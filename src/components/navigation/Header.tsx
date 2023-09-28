"use client";
import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import DrawerComp from "./Drawer";
import { colors } from "@/app/colors";
import Image from "next/image";
import logoImage from "@/../public/Inner-Garden-nav.png";
import NavItems from "./NavItems";

const initialPageForm = [
  {
    text: "JOIN US",
    subPages: [
      { text: "ENROLL YOUR CHILD", route: "/join/child" },
      { text: "JOIN AS AN EDUCATOR", route: "/join/educator" },
      { text: "LOCATIONS", route: "/locations" },
    ],
  },
  {
    text: "INFORMATIONS",
    subPages: [
      { text: "HOLYDAY AND BREAKS", route: "/posts/announcement/######" },
      { text: "PUBLISHED LICENSE", route: "/licencse" },
    ],
  },
  {
    text: "RESOURCES",
    subPages: [
      { text: "FAQ", route: "/post/faq" },
      { text: "MORE", route: "/post/resource" },
    ],
  },
  { text: "LASTEST POSTS", route: "/posts" },
  { text: "EMPLOYEE WELLFARE", route: "/employee-wellfare" },
  { text: "CONTACT", route: "/contact" },
];

const Header = () => {
  const [initialPages, setInitialPages] = useState(initialPageForm);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(730));

  useEffect(() => {
    if (isSmall) {
      setInitialPages([{ text: "ABOUT US", route: "/about-us" }, ...initialPageForm]);
    } else {
      setInitialPages([...initialPageForm]);
    }
  }, [isSmall]);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }} elevation={1}>
        <Toolbar className="flex">
          <div className=" relative flex items-center text-2xl h-14 w-14">
            <Link href="/" className="w-full h-full">
              <Image
                fill
                style={{ objectFit: "cover", padding: "0.3rem" }}
                sizes="auto"
                src={logoImage}
                alt="InnerGarden Logo"
              />
            </Link>
          </div>

          {isSmall ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "3%", color: colors.primary_300 }}>
                Inner Garden
              </Typography>
              <DrawerComp initialPages={initialPages} isSmall={isSmall} />
            </>
          ) : (
            <>
              <NavItems />
              <DrawerComp initialPages={initialPages} isSmall={isSmall} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

// "use client";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";
// import NavItem from "./NavItem";

// interface NavbarProps {
//   currentUser?: User | null;
// }

// const Navbar = ({ currentUser }: NavbarProps) => {
//   const [menu, setMenu] = useState(false);
//   const handleMenu = () => {
//     setMenu(!menu);
//   };

//   return (
//     <nav className="relative z-10 w-full bg-orange-500 text-white">
//       <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
//         {/* Logo */}
//         <div className="flex items-center text-2xl h-14">
//           <Link href="/">Logo</Link>
//         </div>

//         {/* Responsive/Nav: small */}
//         <div className="text-2xl sm:hidden">
//           {menu === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
//         </div>

//         {/* Nav Items */}
//         <div className="hidden sm:block">
//           <NavItem currentUser={currentUser} />
//         </div>

//         {/* Responsive/NavItems: small */}
//         <div className="block sm:hidden">{menu === false ? null : <NavItem mobile currentUser={currentUser} />}</div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
