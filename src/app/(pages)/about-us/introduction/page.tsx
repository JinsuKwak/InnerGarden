import React from "react";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-2.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const Introduction = () => {
  return (
    <SideNavPageContainer title={"About Us"} sideTopics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[1rem]">
            <span>{"Government-Certified Excellence"}</span>
          </div>
          <div className="text-base">
            <span>
              {
                "As a government-certified bilingual kindergarten, we stand as a testament to top-tier education quality. Our commitment to excellence ensures that your child receives the highest standard of education in a nurturing environment."
              }
            </span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[1rem]">
            <span>{"Cultivating Healthy and Happy Futures"}</span>
          </div>
          <div className="text-base ">
            <span>
              {
                "At Inner Garden, we go beyond academics. We are the most well-known daycare in Calgary, dedicated to cultivating healthy and happy growing children. Our holistic approach ensures that your child thrives emotionally, physically, and socially."
              }
            </span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          <div className="text-xl font-[500] pb-[1rem]">
            <span>{"Professional Teaching Excellence"}</span>
          </div>
          <div className="text-base ">
            <span>
              {
                "Behind every successful child is a team of dedicated educators. Our professional teaching team boasts extensive educational experience and skills. We are passionate about nurturing young minds and creating a foundation for a lifetime love of learning."
              }
            </span>
          </div>
        </div>
        <div className="text-base pb-[2rem] italic">
          <span>
            {
              "Join us on a journey where education meets excellence, and your child's future blossoms at Inner Garden Education."
            }
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Introduction;
