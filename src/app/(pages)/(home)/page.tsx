import Image from "next/image";
import React from "react";
import LanguageBar from "@/components/languages/LanguageBar";
import Box from "@mui/material/Box";
import Container from "@/components/Container";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import BlankBar from "@/components/BlankBar";
import MainPostsInfo from "./MainPostsInfo";
import MainOverviews from "./MainOverviews";
import { Divider } from "@mui/material";
import ButtonLink from "@/components/buttons/ButtonLink";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <ImageCarousel />
        <BlankBar />
        <MainPostsInfo />
      </Container>
      <Container>
        <MainOverviews />
      </Container>
      <div className="w-full h-fit bg-[#222] mt-[5rem] ">
        <div className={`flex flex-col justify-center items-center pt-[5rem] px-[2rem]`}>
          <div className={`flex flex-col text-white py-[5rem]`}>
            <div className={`text-5xl font-bold text-center`}>
              <span>{"Stay Healthy and Happy"}</span>
            </div>
            <div className={`text-center text-2xl font-semibold italic pt-[3rem]`}>
              <span>{"Let’s work together"}</span>
            </div>
            <div className={`text-center text-2xl font-semibold italic pt-[1rem]`}>
              <span>{"to give your children a better future"}</span>
            </div>
          </div>
          <div className="w-[10rem] pb-[5rem]">
            <ButtonLink label="Join Us" href="/join" color={"orange"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
