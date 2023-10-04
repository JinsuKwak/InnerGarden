import Image from "next/image";
import React from "react";
import LanguageBar from "@/components/languages/LanguageBar";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import BlankBar from "@/components/BlankBar";
import MainPostsInfo from "./MainPostsInfo";
import MainOverviews from "./MainOverviews";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <ImageCarousel />
        <BlankBar />
        <MainPostsInfo />
      </Container>
      {/* <Container color="red" isFull={true}>
        <Box sx={{ width: 300, height: 300, backgroundColor: "#000" }} />
      </Container> */}
      <Container>
        <MainOverviews />
      </Container>
    </React.Fragment>
  );
};

export default Home;
