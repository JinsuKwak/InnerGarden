import React from "react";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-3.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const Philosophy = () => {
  return (
    <SideNavPageContainer title={"About Us"} sideTopics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="flex flex-col pb-[4rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"Operating Philosophy"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Customer-Centric Approach: We prioritize the unique needs of every child, offering exceptional service and care."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Government-Certified Professionalism: As a certified agency, we maintain high standards, ensuring our teachers are professionally developed for your child's growth."
              }
            </span>
          </div>
          <div className="text-base">
            <span>
              {
                "- Bilingual Teaching for Global Skills: Our bilingual approach fosters cross-cultural communication skills from an early age."
              }
            </span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"Education Philosophy"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Bilingual Learning Environment: We create a bilingual setting, helping children effortlessly learn English and their native language."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Holistic Child Development: Our focus is on nurturing children comprehensively, physically, emotionally, intellectually, and socially."
              }
            </span>
          </div>
          <div className="text-base">
            <span>
              {
                "- Family-Oriented Education: We collaborate closely with parents to provide a supportive educational environment."
              }
            </span>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Philosophy;
