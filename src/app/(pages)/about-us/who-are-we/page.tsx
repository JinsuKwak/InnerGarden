import React from "react";
import { ABOUT_US_TOPICS } from "@/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const WhoAreWe = () => {
  return (
    <SideNavPageContainer title={"About Us"} sideTopics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="text-xl font-[500] pb-[2rem]">
          <span>{"Discover Inner Garden Education's Story"}</span>
        </div>
        <div className="text-base pb-[1rem]">
          <span>
            {
              "Since 2009, Inner Garden Education has been a trusted provider of exceptional services in the heart of North West Calgary's Hidden Valley community. With 15 years of experience, we've honed our commitment to excellence."
            }
          </span>
        </div>
        <div className="text-base pb-[1rem]">
          <span>
            {
              "Our approach to Early Childhood Education is characterized by an engaging, pleasant, and informative curriculum. We're dedicated to creating an environment where children's formative years are filled with meaningful growth and joyful learning."
            }
          </span>
        </div>
        <div className="text-base">
          <span>
            {
              "At Inner Garden, we believe in nurturing each child's unique potential, offering an enriching experience that goes beyond traditional education. Join us on this delightful educational journey, where every child's precious years are celebrated and transformed into a foundation for a bright future."
            }
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default WhoAreWe;
