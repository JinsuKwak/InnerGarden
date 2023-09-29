"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Carouseltem from "./Carouseltem";
import InnerGardenCarousel1 from "@/../public/InnerGardenCarousel1.jpg";
import InnerGardenCarousel2 from "@/../public/InnerGardenCarousel2.jpg";
import InnerGardenCarousel3 from "@/../public/InnerGardenCarousel3.jpg";
import ButtonLink from "../Buttons/ButtonLink";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RESPONSIVE_SMALL } from "@/app/constants";

const items = [
  {
    name: "InnerGardenCarousel1",
    // imgSrc: "/../../public/InnerGardenCarousel1.jpg",
    img: InnerGardenCarousel1,
    description: "Day Home Agency based in Calgary",
    alt: "childrens at playground",
  },
  {
    name: "InnerGardenCarousel2",
    // imgSrc: "/../../public/InnerGardenCarousel2.jpg",
    img: InnerGardenCarousel2,
    description: "The Bilingual Montessori Day Home Agency based in Calgary",
    alt: "childrens at playground",
  },
  {
    name: "InnerGardenCarousel3",
    // imgSrc: "/../../public/InnerGardenCarousel3.jpg",
    img: InnerGardenCarousel3,
    description: "The Bilingual Montessori Day Home Agency based in Calgary",
    alt: "childrens at playground",
  },
];

const ImageCarousel = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));
  return (
    <>
      <Carousel
        indicators={false}
        navButtonsAlwaysInvisible={true}
        interval={5000}
        swipe={false}
        className={`w-full overflow-hidden rounded-xl relative ${isSmall ? "h-[50vh]" : "h-[54vh]"}`}
      >
        {items.map((item, i) => (
          <Carouseltem key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
