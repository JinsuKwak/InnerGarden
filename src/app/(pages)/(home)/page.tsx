import Image from "next/image";
import React from "react";
import LanguageBar from "@/components/languages/LanguageBar";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import BlankBar from "@/components/BlankBar";
import MainPostsInfo from "@/app/(pages)/(home)/MainPostsInfo";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <ImageCarousel />
        <BlankBar />
        <MainPostsInfo />
      </Container>
    </React.Fragment>
  );
};

export default Home;
