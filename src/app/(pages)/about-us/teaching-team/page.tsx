import React from "react";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-5.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const TeachingTeam = () => {
  return (
    <SideNavPageContainer topics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="flex flex-col pb-[4rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"Teaching Team"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- With a combined 14 years of experience in early education, our team excels in both Western and Eastern teaching approaches."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Our curriculum integrates diverse cultural elements, knowledge, and values, ensuring a comprehensive educational journey."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- We implement a systematic bilingual teaching method, incorporating both the native language and English to enhance language proficiency."
              }
            </span>
          </div>
          <div className="text-base">
            <span>
              {
                "- Inner Garden teachers are not only experienced and skilled but also highly communicative, passionate, and dedicated to early childhood education."
              }
            </span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"Facilities and Cources"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Our well-equipped and secure facilities prioritize the physical and mental well-being of every child."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Explore a diverse range of specialized courses, including music, fitness, science, cooking, and handcrafts."
              }
            </span>
          </div>
          <div className="text-base">
            <span>
              {
                "- Our courses aim to develop children's overall qualities and foster the 5C traits: Confidence, Critical Thinking, Cooperation, Creativity, and Communication."
              }
            </span>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default TeachingTeam;
