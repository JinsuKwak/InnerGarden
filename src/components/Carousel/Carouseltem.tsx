import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ButtonLink from "../buttons/ButtonLink";
import { DM_Sans } from "next/font/google";
import useIsSmall from "@/app/hooks/useIsSmall";
import useIsMedium from "@/app/hooks/useIsMedium";
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
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  return (
    <Paper className={`relative ${isSmall ? "h-[50vh]" : "h-[54vh]"}`}>
      <Image src={item.img} fill sizes="auto" className="object-cover w-full" alt={item.alt} />
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
        <ButtonLink label={"JOIN"} href={"/join"} color={"orange"} />
      </div>
    </Paper>
  );
};

export default Carouseltem;
