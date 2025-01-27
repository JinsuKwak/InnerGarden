// "use client";
// import React, { useState, useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import Link from "next/link";
// import DrawerComp from "./Drawer";
// import { colors } from "@/app/colors";
// import Image from "next/image";
// import logoImage from "@/../public/InnerGarden-Nav.png";
// import NavItems from "./NavItems";
// import { RESPONSIVE_SMALL } from "@/constants";
// import { RESOURCE_TOPICS } from "@/constants";
// import Button from "@mui/material/Button";
// import LanguageButton from "@/components/Languages/LanguageButton";
// import getToken from "@/app/util/getToken";
// import removeToken from "@/app/util/removeToken";
// import { useRouter } from "next/navigation"; // For navigation after sign-out

// const initialPageForm = [
//   {
//     text: "JOIN US",
//     subPages: [
//       { text: "ENROLL YOUR CHILD", route: "/join/enroll-your-child" },
//       { text: "JOIN AS AN EDUCATOR", route: "/join/join-as-educator" },
//       { text: "LOCATIONS", route: "/locations/all" },
//     ],
//   },
//   {
//     text: "INFORMATIONS",
//     subPages: [
//       { text: "HOLYDAY AND BREAKS", route: "/posts/announcement/######" },
//       { text: "PUBLISHED LICENSE", route: "/resources/published-license" },
//     ],
//   },
//   {
//     text: "RESOURCES",
//     subPages: [
//       { text: "FAQ", route: "/posts/faq" },
//       { text: "MORE", route: RESOURCE_TOPICS[0].href },
//     ],
//   },
//   { text: "LASTEST POSTS", route: "/posts/all" },
//   { text: "EMPLOYEE WELLFARE", route: RESOURCE_TOPICS[2].href },
//   { text: "CONTACT", route: "/contact" },
//   { text: "SIGN IN", route: "/auth/sign-in" },
// ];

// const Header = () => {
//   //const currentUser = getCurrentUser();
//   const [initialPages, setInitialPages] = useState(initialPageForm);
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));

//   useEffect(() => {
//     if (isSmall) {
//       setInitialPages([{ text: "ABOUT US", route: "/about-us/who-are-we" }, ...initialPageForm]);
//     } else {
//       setInitialPages([...initialPageForm]);
//     }
//   }, [isSmall]);

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: colors.background }} elevation={1}>
//         <Toolbar className="flex">
//           <div className=" relative flex items-center text-2xl md:h-14 md:w-14 h-12 w-12">
//             <Link href="/" className="w-full h-full">
//               <Image
//                 style={{ objectFit: "cover", padding: "0.3rem" }}
//                 sizes="auto"
//                 src={logoImage}
//                 alt="InnerGarden Logo"
//               />
//             </Link>
//           </div>

//           {isSmall ? (
//             <>
//               <Typography className="text-neutral-900 pl-[3%] md:text-3xl text-2xl font-serif	">Inner Garden</Typography>
//               <DrawerComp initialPages={initialPages} isSmall={isSmall} />
//             </>
//           ) : (
//             <>
//               <NavItems />
//               <DrawerComp initialPages={initialPages} isSmall={isSmall} />
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;

'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import DrawerComp from './Drawer';
import { colors } from '@/app/colors';
import Image from 'next/image';
import logoImage from '@/../public/InnerGarden-Nav.png';
import NavItems from './NavItems';
import { RESPONSIVE_SMALL } from '@/constants';
import { RESOURCE_TOPICS } from '@/constants';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import removeToken from '@/app/util/removeToken';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { User } from '@/types/User';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialPageForm = [
  {
    text: 'JOIN US',
    subPages: [
      { text: 'ENROLL YOUR CHILD', route: '/join/enroll-your-child' },
      { text: 'JOIN AS AN EDUCATOR', route: '/join/join-as-educator' },
      { text: 'LOCATIONS', route: '/locations/all' },
    ],
  },
  {
    text: 'INFORMATIONS',
    subPages: [
      { text: 'HOLYDAY AND BREAKS', route: '/posts/announcement/######' },
      { text: 'PUBLISHED LICENSE', route: '/resources/published-license' },
    ],
  },
  {
    text: 'RESOURCES',
    subPages: [
      { text: 'FAQ', route: '/posts/faq' },
      { text: 'MORE', route: RESOURCE_TOPICS[0].href },
    ],
  },
  { text: 'LASTEST POSTS', route: '/posts/all' },
  { text: 'EMPLOYEE WELLFARE', route: RESOURCE_TOPICS[2].href },
  { text: 'CONTACT', route: '/contact' },
  { text: 'SIGN IN', route: '/auth/sign-in' },
];

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary_300,
    },
    secondary: {
      main: colors.primary_300,
    },
  },
});

const Header = () => {
  const router = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));
  const [user, setUser] = useState<User | null>(null);
  const [initialPages, setInitialPages] = useState(initialPageForm);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser(); // Call helper function
      setUser(currentUser);
      console.log(currentUser);
    };

    fetchUser();
  }, []);

  const handleSignOut = () => {
    removeToken();
    setUser(null);
    router.push('/auth/sign-in');
  };

  useEffect(() => {
    if (isSmall) {
      setInitialPages([
        { text: 'ABOUT US', route: '/about-us/who-are-we' },
        ...initialPageForm,
      ]);
    } else {
      setInitialPages([...initialPageForm]);
    }
  }, [isSmall]);

  return (
    <React.Fragment>
      <AppBar sx={{ background: colors.background }} elevation={1}>
        <Toolbar className='flex'>
          <div className=' relative flex items-center text-2xl md:h-14 md:w-14 h-12 w-12'>
            <Link href='/' className='w-full h-full'>
              <Image
                style={{ objectFit: 'cover', padding: '0.3rem' }}
                sizes='auto'
                src={logoImage}
                alt='InnerGarden Logo'
              />
            </Link>
          </div>

          {isSmall ? (
            <ThemeProvider theme={defaultTheme}>
              <div className='flex items-center justify-between w-full'>
                {/* 왼쪽: Inner Garden */}
                <Typography className='text-neutral-900 md:text-3xl text-2xl font-serif'>
                  Inner Garden
                </Typography>
                <div className='flex items-center'>
                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className='pr-4 text-neutral-800 text-sm font-medium transition-all duration-300 ease-in-out'
                      style={{
                        color: theme.palette.text.primary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'rgb(251, 146, 60)';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          theme.palette.text.primary;
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      {user.userFirstName}
                    </button>
                  ) : null}
                  <DrawerComp initialPages={initialPages} isSmall={isSmall} />
                </div>
              </div>
            </ThemeProvider>
          ) : (
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <NavItems />
              </div>

              <div className='flex items-center'>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className='pr-4 text-neutral-800 text-sm transition-all duration-300 ease-in-out'
                    style={{
                      color: theme.palette.text.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgb(251, 146, 60)';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.palette.text.primary;
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    {'Hi, ' + user.userFirstName}
                  </button>
                ) : null}
                <DrawerComp initialPages={initialPages} isSmall={isSmall} />
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
