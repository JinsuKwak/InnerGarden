import React from "react";
import { JOIN_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";

const JoinYourChild = () => {
  return (
    <SideNavPageContainer title={"Join Us"} sideTopics={JOIN_US_TOPICS}>
      <div className={`relative w-[100%] h-[11rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col h-[100%]">
        <div className="flex flex-col h-[100%] justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl font-bold  pb-[2rem]">
              <span>{"Enroll Your Child:"}</span>
            </div>
            <div className="text-base flex flex-col pb-[2rem]">
              <div className="flex flex-col">
                <span className="font-semibold">
                  {`If you want to admit as soon as possible or looking for immediate open spots: `}
                </span>
                <span className="font-normal">
                  {`Contact Inner Garden for the vacancy of a day home and arrange an interview using the following link: `}
                  <Link href={"/contact"}>
                    <span className="text-orange-400 underline">{`Contact Us - Inner Garden`}</span>
                  </Link>
                </span>
              </div>
            </div>
            <div className="text-base flex flex-col">
              <div className="flex flex-col pb-[2rem]">
                <span className="font-semibold">{`If you plan to admit in the future: `}</span>
                <span className="font-normal ">
                  {`Fill out the survey form, and we will get back to you. If you have any further questions, also feel free to contact us.`}
                </span>
              </div>
              <span className="pb-[2rem]">
                {`Additionally, you might find the answers to your queries in our Frequently Asked Questions (FAQ) section. `}
                <Link href={"/FAQ"}>
                  <span className="text-orange-400 underline font-normal">{`Check it out`}</span>
                </Link>
              </span>
              <div className="font-base pb-[2rem] italic text-sm">
                <span>{`Thank you for considering Inner Garden for your child’s education. We appreciate your interest and trust in our program and are excited to take the first steps with you and your child.`}</span>
              </div>
            </div>
          </div>
          <div className="w-[24rem] flex justify-center">
            <ButtonLink
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSerErqDHAcmf6kKYxU-M9OfXKcScQEgv8voNTxETEnoeom53A/viewform"
              }
              label="Child Interest Survey Form"
              color="orange"
            />
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default JoinYourChild;
