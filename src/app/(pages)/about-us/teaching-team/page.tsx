import React from "react";
import Container from "@/components/Container";
import LanguageBar from "@/components/languages/LanguageBar";
import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
import { PREVEIW_NUM_PAGE } from "@/app/constants";
import SideNavbar from "@/components/navigation/SideNavbar";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-5.jpeg";
import Image from "next/image";

const TeachingTeam = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <div className="flex justify-between pt-[3rem]">
          <div className="flex flex-col justify-start">
            <div className="font-semibold text-4xl">
              <span>{"About Us"}</span>
            </div>
            <div className="pt-[4rem]">
              <SideNavbar topics={ABOUT_US_TOPICS} />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden w-[100%] max-w-[1200px] min-h-[40rem] ml-[4rem] shadow-md  flex flex-col">
            <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
              <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
            </div>
            <div className="p-[2rem]">
              <span>{"aboutus contain?er"}</span>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default TeachingTeam;
