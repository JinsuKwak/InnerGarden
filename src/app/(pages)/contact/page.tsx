import React from "react";
import { CONTACT_TOPICS } from "@/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-3.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import ButtonLink from "@/components/buttons/ButtonLink";

const Contact = () => {
  return (
    <SideNavPageContainer title={"Contact"} sideTopics={CONTACT_TOPICS}>
      <div className={`relative w-[100%] h-[11rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="p-[2rem] flex flex-col h-[100%]">
        <div className="flex flex-col h-[100%] justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col pb-[2rem]">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"Front Desk:"}</span>
              </div>
              <div className="text-base font-normal pb-[1rem]">
                <span className="pl-[1rem]">
                  {`Phone: `}
                  <a href="tel:+18258631772" className="text-orange-400 underline">
                    {`+1 (825) 863-1772`}
                  </a>
                </span>
              </div>
              <div className="text-base font-normal pb-[2rem]">
                <span className="pl-[1rem]">
                  {`E-mail: `}
                  <a href="mailto:reception@innergardenedu.com" className="text-orange-400 underline">
                    {`reception@innergardenedu.com`}
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"Bing Liu - Founder & Chief Director:"}</span>
              </div>
              <div className="text-base font-normal pb-[2rem] mb-[4rem]">
                <span className="pl-[1rem]">
                  {`E-mail: `}
                  <a href="mailto:liu.bing@innergardenedu.com" className="text-orange-400 underline">
                    {`liu.bing@innergardenedu.com`}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] items-center justify-center">
            <div className="w-[24rem] flex justify-center">
              <ButtonLink href={"/join/enroll-your-child"} label="Interested to join us?" color="orange" />
            </div>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Contact;
