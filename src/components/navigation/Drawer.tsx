import React, { useEffect, useState } from "react";
import { Drawer, List, ListItemButton, Collapse, IconButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { styled } from "@mui/material/styles";
import { colors } from "@/app/colors";

interface Page {
  text: string;
  route: string;
}

interface SubPage extends Page {}

interface PageWithSubPages {
  text: string;
  subPages: SubPage[];
}

interface DrawerCompProps {
  initialPages: (Page | PageWithSubPages)[];
  isSmall: boolean;
}

const DrawerComp: React.FC<DrawerCompProps> = ({ initialPages, isSmall }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSubDrawer, setOpenSubDrawer] = useState<number | null>(null);

  const handleSubDrawer = (index: number) => {
    if (openSubDrawer === index) {
      setOpenSubDrawer(null);
    } else {
      setOpenSubDrawer(index);
    }
  };

  const isActive = (route: string) => pathname === route;

  return (
    <React.Fragment>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={`${isSmall ? "w-[60vw]" : "w-[30vw] max-w-sm"}`}>
          {initialPages.map((page, index) => (
            <React.Fragment key={index}>
              {"subPages" in page ? (
                <StyledListItemButton
                  onClick={() => handleSubDrawer(index)}
                  selected={openSubDrawer === index} // Set selected based on whether sub-drawer is open
                >
                  <ListItemText primary={page.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                  {openSubDrawer === index ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
                </StyledListItemButton>
              ) : (
                <Link href={page.route} passHref>
                  <StyledListItemButton selected={isActive(page.route)}>
                    <ListItemText primary={page.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                  </StyledListItemButton>
                </Link>
              )}
              {"subPages" in page && (
                <Collapse in={openSubDrawer === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {page.subPages.map((subPage, subIndex) => (
                      <Link key={subIndex} href={subPage.route} passHref>
                        <StyledSubListItemButton selected={isActive(subPage.route)}>
                          <ListItemText primary={subPage.text} primaryTypographyProps={{ fontSize: "1rem" }} />
                        </StyledSubListItemButton>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <StyledIconButton
        sx={{ color: `${colors.neutral_900}`, marginLeft: "auto", paddingRight: "0" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </StyledIconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderBottom: "1px solid #ccc",
  paddingLeft: theme.spacing(2),
  transition: "background-color 0.3s ease",
  "&:hover": {
    // backgroundColor: `${colors.primary_100}`,
    // borderBottom: `1px solid ${colors.primary_300}`,
    backgroundColor: `${colors.primary_100}`,
    borderBottom: `1px solid ${colors.primary_300}`,
  },
  "&.Mui-selected": {
    backgroundColor: "transparent",
  },
  "&.MuiButtonBase-root:hover": {
    backgroundColor: `${colors.primary_100}`,
  },
}));

const StyledSubListItemButton = styled(ListItemButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "transparent",
    borderBottom: `1px solid ${colors.primary_300}`,
    color: `${colors.primary_300}`,
  },
  "&.Mui-selected": {
    backgroundColor: "transparent",
  },
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
}));

// import React, { useEffect, useState } from "react";
// import { Drawer, List, ListItemButton, Collapse, IconButton, ListItemText } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
// import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
// import { styled } from "@mui/material/styles";
// import { colors } from "@/app/colors";

// // ... (other imports and styles)

// interface Page {
//   text: string;
//   route: string;
// }

// interface SubPage extends Page {}

// interface PageWithSubPages {
//   text: string;
//   subPages: SubPage[];
// }

// interface DrawerCompProps {
//   initialPages: (Page | PageWithSubPages)[];
//   isSmall: boolean;
// }

// export default DrawerComp: React.FC<DrawerCompProps> = ({ initialPages, isSmall }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [openSubDrawer, setOpenSubDrawer] = useState<number | null>(null);

//   const isActive = (route: string) => pathname === route;

//   const handleSubDrawer = (index: number) => {
//     if (openSubDrawer === index) {
//       setOpenSubDrawer(null);
//     } else {
//       setOpenSubDrawer(index);
//     }
//   };

//     // ... (previous code)

//     return (
//       <React.Fragment>
//         <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
//           <List className={`${isSmall ? "w-[60vw]" : "w-[30vw] max-w-sm"}`}>
//             {initialPages.map((page, index) => (
//               <React.Fragment key={index}>
//                 {"subPages" in page ? (
//                   <StyledListItemButton onClick={() => handleSubDrawer(index)} selected={openSubDrawer === index}>
//                     <ListItemText primary={page.text} primaryTypographyProps={{ fontSize: "1rem" }} />
//                     {openSubDrawer === index ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
//                   </StyledListItemButton>
//                 ) : (
//                   // Use Link from Next.js for client-side navigation
//                   <Link href={page.route} passHref>
//                     <StyledListItemButton selected={isActive(page.route)}>
//                       <ListItemText primary={page.text} primaryTypographyProps={{ fontSize: "1rem" }} />
//                     </StyledListItemButton>
//                   </Link>
//                 )}
//                 {"subPages" in page && (
//                   <Collapse in={openSubDrawer === index} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {page.subPages.map((subPage, subIndex) => (
//                         // Use Link from Next.js for client-side navigation
//                         <Link key={subIndex} href={subPage.route} passHref>
//                           <StyledSubListItemButton selected={isActive(subPage.route)}>
//                             <ListItemText primary={subPage.text} primaryTypographyProps={{ fontSize: "1rem" }} />
//                           </StyledSubListItemButton>
//                         </Link>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Drawer>
//         <StyledIconButton
//           sx={{ color: `${colors.neutral_600}`, marginLeft: "auto", paddingRight: "0" }}
//           onClick={() => setOpenDrawer(!openDrawer)}
//         >
//           <MenuIcon />
//         </StyledIconButton>
//       </React.Fragment>
//     );
//   };

//   // ... (rest of the code remains the same)
//   const StyledIconButton = styled(IconButton)(({ theme }) => ({
//     "&.MuiButtonBase-root:hover": {
//       backgroundColor: "transparent",
//     },
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//   }));

//   const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
//     borderBottom: "1px solid #ccc",
//     paddingLeft: theme.spacing(2),
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: `${colors.primary_100}`,
//       borderBottom: `1px solid ${colors.primary_300}`,
//     },
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//     },
//     "&.MuiButtonBase-root:hover": {
//       backgroundColor: `${colors.primary_100}`,
//     },
//   }));

//   const StyledSubListItemButton = styled(ListItemButton)(({ theme }) => ({
//     marginLeft: theme.spacing(2),
//     transition: "background-color 0.3s ease",
//     "&:hover": {
//       backgroundColor: "transparent",
//       borderBottom: `1px solid ${colors.primary_300}`,
//       color: `${colors.primary_300}`,
//     },
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//     },
//     "&.MuiButtonBase-root:hover": {
//       backgroundColor: "transparent",
//     },
//   }));
// };
