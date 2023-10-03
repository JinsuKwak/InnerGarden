import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ButtonLink from "../buttons/ButtonLink";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RESPONSIVE_SMALL } from "@/app/constants";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({
  weight: "300",
  subsets: ["latin"],
});

interface ItemProps {
  name: string;
  //   imgSrc: string;
  img: StaticImageData;
  description: string;
  alt: string;
}

const Carouseltem = ({ item }: { item: ItemProps }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));
  const isMedium = useMediaQuery(theme.breakpoints.down(1400));
  return (
    <Paper>
      <Image src={item.img} fill className="object-cover w-full" alt={item.alt} />
      <Typography
        variant="h1"
        className={`absolute ${isSmall ? "top-5 left-5" : "top-10 left-10"} ${font.className} text-orange-400 ${
          isSmall ? "text-[4rem] text-orange-400" : "text-[6rem]"
        }`}
        style={{ textShadow: "2px 2px 2px white" }}
      >
        {"Inner Garden Education"}
      </Typography>

      {!isMedium && (
        <Typography
          variant="h4"
          className={`absolute ${isSmall ? "top-5 left-5" : "top-40 left-12"}  `}
          style={{ textShadow: "2px 2px 2px white" }}
        >
          {item.description}
        </Typography>
      )}
      <div className={`absolute ${isSmall ? "bottom-5 right-5" : "bottom-10 right-10"}`}>
        <ButtonLink label={"JOIN"} href={"/join"} color={"orange"} isSmall={isSmall} />
      </div>
    </Paper>
  );
};

export default Carouseltem;
