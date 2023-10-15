import React from "react";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-4.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const Environment = () => {
  return (
    <SideNavPageContainer title={"About Us"} sideTopics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="flex flex-col pb-[4rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"Certification and Safety Standards"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>{"- We uphold strict teaching standards and a robust management system."}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>{"- Regular safety and hygiene checks guarantee a secure and clean environment."}</span>
          </div>
          <div className="text-base">
            <span>{"- Government-certified and regulated to ensure both legality and top-notch quality."}</span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[2rem]">
            <span>{"High-Quality Learning Environment"}</span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Our facility offers a safe, reliable, and nurturing space designed for the holistic well-being of children."
              }
            </span>
          </div>
          <div className="text-base pb-[1rem]">
            <span>
              {
                "- Explore a wealth of educational resources, from engaging books to enriching music and stimulating games."
              }
            </span>
          </div>
          <div className="text-base">
            <span>
              {
                "- Our dedicated teachers bring a strong sense of responsibility, providing beneficial education that goes beyond the ordinary."
              }
            </span>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Environment;
