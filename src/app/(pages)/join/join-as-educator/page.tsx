import React from "react";
import { JOIN_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-5.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";

const JoinAsEducator = () => {
  return (
    <SideNavPageContainer title={"Join Us"} sideTopics={JOIN_US_TOPICS}>
      <div className={`relative w-[100%] h-[11rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col h-[100%]">
        <div className="flex flex-col h-[100%] justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"Join Inner Garden as an Educator:"}</span>
              </div>
              <div className="text-base font-normal pb-[2rem]">
                <span>{`Welcome to Inner Garden Education! Are you passionate about early childhood education and looking for an opportunity to make a difference? You’ve come to the right place.`}</span>
              </div>
              <div className="text-base font-normal pb-[3rem]">
                <span>{`However, we have strict screening and application procedure for every applicant, so the following application process has to be done, contact us only if you are confident you can be a good caretaker and you have sufficient space in your house.`}</span>
              </div>
            </div>
            <div className="text-base font-normal pb-[1rem]">
              <span>{`Follow the following procedure to apply as an educator:`}</span>
            </div>
            <div className="flex flex-col text-base pb-[2rem]">
              <span className="font-normal pl-[1rem] pb-[0.5rem]">
                {`- Browse through `}
                <Link href={"/"}>
                  <span className="text-orange-400 underline">{`Inner Garden`}</span>
                </Link>
                {`, learn about our values and goals on our website.`}
              </span>
              <span className="font-normal pl-[1rem] pb-[0.5rem]">{`- Existing dayhome with children is prioritized.`}</span>
              <span className="font-normal pl-[1rem] pb-[0.5rem]">{`- Complete the following application to proceed:`}</span>
            </div>
          </div>
          <div className="w-[24rem] flex justify-center">
            <ButtonLink href={"/join/join-as-educator/apply-innergarden"} label="Join as Educator" color="orange" />
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default JoinAsEducator;
