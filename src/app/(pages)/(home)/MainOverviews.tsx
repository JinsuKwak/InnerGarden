"use client";
import React from "react";
import Image from "next/image";
import InnerGardenMainImg1 from "@/../public/InnerGarden-Main-1.jpeg";
import InnerGardenMainImg2 from "@/../public/InnerGarden-Main-2.jpg";
import InnerGardenMainImg3 from "@/../public/InnerGarden-Main-3.jpeg";
import InnerGardenMainImg4 from "@/../public/InnerGarden-Main-4.jpeg";
import InnerGardenMainImg5 from "@/../public/InnerGarden-Main-5.jpeg";
import InnerGardenMainImg6_1 from "@/../public/InnerGarden-Main-6-1.jpeg";
import InnerGardenMainImg6_2 from "@/../public/InnerGarden-Main-6-2.jpeg";
import { Divider } from "@mui/material";
import useIsSmall from "@/app/hooks/useIsSmall";
import useIsMedium from "@/app/hooks/useIsMedium";
import ButtonLink from "@/components/buttons/ButtonLink";
import ButtonLinkOutline from "@/components/buttons/ButtonLinkOutline";
import { IoCheckmarkSharp, IoDiamondOutline, IoNutritionOutline } from "react-icons/io5";
import MainSummary from "./MainSummary";

const MainOverviews = () => {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  return (
    <>
      <Divider />
      <div className="flex-col w-full">
        {/* {#################################### SECTION 1 ######################################} */}
        <div className={`flex ${isSmall ? "justify-center flex-col" : "justify-between"} pt-[5rem]`}>
          {/* {############### IMAGE ##############} */}
          <div
            className={`relative ${
              isSmall ? "w-[100%]" : "w-[55%]"
            } overflow-hidden rounded-lg aspect-[16/10] mr-[2rem] filter saturate-75`}
          >
            <Image
              src={InnerGardenMainImg1}
              sizes="auto"
              fill
              alt="Children engaged in creative activities, drawing and learning at table"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
            <div className="absolute text-white top-10 left-10 z-30 text-4xl font-bold">
              <span>{"15 Years of Excellence"}</span>
            </div>
            {!isSmall && (
              <div className={`absolute w-[70%] text-white top-[8rem] left-10 z-30 text-2xl font-semibold`}>
                <span>
                  {`Inner Garden Education has been providing excellent services since 2009. We first founded in North West Calgary, Hidden Valley community.`}
                </span>
              </div>
            )}
          </div>
          {/* {############### IMAGE ##############} */}
          {/* {############### TEXT ##############} */}
          <div className={`${isSmall ? "w-full items-center" : "w-[30%]"} flex flex-col justify-between`}>
            <div className="flex-col justify-center">
              {isSmall && (
                <div className={`w-full text-black top-[16rem] left-10 z-30 text-base font-semibold pt-[2rem]`}>
                  <span>
                    {
                      "Inner Garden Education has been providing excellent services since 2009. We first founded in North West Calgary, Hidden Valley community."
                    }
                  </span>
                </div>
              )}
              <div
                className={`w-full text-black top-[16rem] left-10 z-30 font-semibold ${
                  isSmall ? "pt-[1rem] text-base" : "text-lg"
                }`}
              >
                <span>
                  {
                    "Striving with 15 years of experience, we have developed an enjoyable, pleasant and informative learning curriculum for our children to benefit their years of precious time in Early Childhood Education."
                  }
                </span>
              </div>
              <div
                className={`w-full text-black top-[16rem] left-10 z-30 ${
                  isSmall ? "text-sm" : "text-base"
                } font-semibold flex-col italic pt-[2rem]`}
              >
                <div>
                  <span>{"There are millions of roses in the spring, but there is only one spring for a rose."}</span>
                </div>
                <div className="pt-[1rem]">
                  <span>{"- Bing Liu, Founder"}</span>
                </div>
              </div>
            </div>
            <div className="pt-[2rem] w-full">
              <ButtonLink label={"10th Anniversary Speech"} href={"/posts/announcemnts"} color={"orange"} />
            </div>
          </div>
          {/* {############### TEXT ##############} */}
        </div>
        {/* {#################################### SECTION 2 ######################################} */}
        <Divider className="pt-[5rem]" />
        <div className={`flex ${isSmall ? "justify-center flex flex-col" : "justify-between"} pt-[5rem]`}>
          {/* {############### TEXT ##############} */}
          <div className={`${isSmall ? "w-full items-center" : "w-[30%]"} flex flex-col justify-between mr-[2rem]`}>
            <div className="flex-col justify-center">
              <div className={`w-full text-black top-[16rem] left-10 z-30 text-4xl font-semibold `}>
                <span>{"Subsidy Enabled"}</span>
              </div>
              {/* {############### IMAGE-SMALL ##############} */}
              {isSmall && (
                <div
                  className={`relative ${
                    isSmall ? "w-[100%]" : "w-[55%]"
                  } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75 mt-[2rem]`}
                >
                  <Image src={InnerGardenMainImg2} sizes="auto" fill alt="Canadian Flag" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
                </div>
              )}
              {/* {############### IMAGE-SMALL ##############} */}
              <div className={`w-full text-black top-[16rem] left-10 z-30 text-base font-semibold flex-col pt-[2rem]`}>
                <div>
                  <span>
                    {"All of Inner Garden Education licensed day homes are eligible for child care subsidies."}
                  </span>
                </div>
                <div className="pt-[1rem]">
                  <span>
                    {
                      "This means that families with children aged 0 to 6 may be able to receive financial assistance to help cover the cost of child care at our agency."
                    }
                  </span>
                </div>
                <div className="pt-[2rem] text-xs italic">
                  <span>
                    {
                      "* The subsidy rates vary based on factors such as the child’s age, family income, and the number of hours of care needed."
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[2rem] w-full">
              <ButtonLink label={"Learn More"} href={"/posts/announcemnts"} color={"orange"} />
            </div>
          </div>
          {/* {############### TEXT ##############} */}
          {/* {############### IMAGE-BASE ##############} */}
          {!isSmall && (
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[55%]"
              } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75`}
            >
              <Image src={InnerGardenMainImg2} sizes="auto" fill alt="Canadian Flag" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
            </div>
          )}
          {/* {############### IMAGE-BASE ##############} */}
        </div>
        {/* {#################################### SECTION 3 ######################################} */}
        <Divider className="pt-[5rem]" />
        <div className={`flex ${isSmall ? "justify-center flex-col" : "justify-between"} pt-[5rem]`}>
          {/* {############### IMAGE ##############} */}
          <div
            className={`relative ${
              isSmall ? "w-[100%]" : "w-[55%]"
            } overflow-hidden rounded-lg aspect-[16/10] mr-[2rem] filter saturate-75`}
          >
            <Image
              src={InnerGardenMainImg3}
              sizes="auto"
              fill
              alt="Group of women celebrating graduation from Inner Garden Education program"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
            <div className="absolute text-white top-10 left-10 z-30 text-4xl font-bold">
              <span>{"The Inner Garden Education Commitment"}</span>
            </div>
          </div>
          {/* {############### IMAGE ##############} */}
          {/* {############### TEXT ##############} */}
          <div className={`${isSmall ? "w-full items-center" : "w-[30%]"} flex flex-col justify-between`}>
            <div className="flex-col justify-center">
              <div
                className={`w-full text-black top-[16rem] left-10 z-30 text-2xl font-bold ${
                  isSmall ? "pt-[2rem]" : ""
                }`}
              >
                <span>{"Nurturing Educators, Shaping Futures"}</span>
              </div>
              <div
                className={`w-full text-black top-[16rem] left-10 z-30 font-semibold ${
                  isSmall ? "pt-[1rem] text-sm" : "text-base"
                }`}
              >
                <div className="pt-[2rem]">
                  <span>
                    {
                      "At Inner Garden, we believe in empowering our educators and enriching the lives of our children. "
                    }
                  </span>
                </div>
                <div className="pt-[1rem]">
                  <span>
                    {
                      "With our unprecedented support and competitive remuneration, we foster an environment where educators thrive, and children flourish."
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[2rem] w-full">
              <ButtonLink label={"Empoloyee Welfare"} href={"/posts/announcemnts"} color={"orange"} />
            </div>
          </div>
          {/* {############### TEXT ##############} */}
        </div>
        {/* {#################################### SECTION 4 ######################################} */}
        <Divider className="pt-[5rem]" />
        <div className={`flex ${isSmall ? "justify-center flex flex-col" : "justify-between"} pt-[5rem]`}>
          {/* {############### TEXT ##############} */}
          <div className={`${isSmall ? "w-full items-center" : "w-[30%]"} flex flex-col justify-between mr-[2rem]`}>
            <div className="flex-col justify-center">
              <div className={`w-full text-black top-[16rem] left-10 z-30 text-4xl font-semibold `}>
                <span>{"Government Licensed"}</span>
              </div>
              {/* {############### IMAGE-SMALL ##############} */}
              {isSmall && (
                <div
                  className={`relative ${
                    isSmall ? "w-[100%]" : "w-[55%]"
                  } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75 mt-[2rem]`}
                >
                  <Image src={InnerGardenMainImg4} sizes="auto" fill alt="Paper with colorful crayons" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
                </div>
              )}
              {/* {############### IMAGE-SMALL ##############} */}
              <div className={`w-full text-black top-[16rem] left-10 z-30 text-base font-semibold flex-col pt-[2rem]`}>
                <div>
                  <span>
                    {
                      "In December 2021, Government of Alberta approved Inner Garden Education as the first approved Day Home Agency license issued. "
                    }
                  </span>
                </div>
                <div className="pt-[1rem]">
                  <span>
                    {
                      "We demonstrated our professionalism, credibility and perfected system & curriculum to government officials. And we are honored to serve the public community."
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[2rem] w-full">
              <ButtonLink label={"View License"} href={"/posts/announcemnts"} color={"orange"} />
            </div>
          </div>
          {/* {############### TEXT ##############} */}
          {/* {############### IMAGE-BASE ##############} */}
          {!isSmall && (
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[55%]"
              } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75`}
            >
              <Image src={InnerGardenMainImg4} sizes="auto" fill alt="Paper with colorful crayons" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
            </div>
          )}
          {/* {############### IMAGE-BASE ##############} */}
        </div>
        {/* {#################################### SECTION 5 ######################################} */}
        <Divider className="pt-[5rem]" />
        {isSmall && (
          <div className={`w-full text-black top-[16rem] left-10 z-30 text-4xl font-semibold pt-[5rem]`}>
            <span>{"Qualified"}</span>
          </div>
        )}
        <div className={`flex ${isSmall ? "justify-center flex-col pt-[2rem]" : "justify-between pt-[5rem]"}`}>
          {/* {############### IMAGE ##############} */}
          <div
            className={`relative ${
              isSmall ? "w-[100%]" : "w-[55%]"
            } overflow-hidden rounded-lg aspect-[16/10] mr-[2rem] filter saturate-75`}
          >
            <Image src={InnerGardenMainImg5} sizes="auto" fill alt="Picture of Inner Garden Education Classroom" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-600 to-neutral-600 opacity-40" />
          </div>
          {/* {############### IMAGE ##############} */}
          {/* {############### TEXT ##############} */}
          <div className={`${isSmall ? "w-full items-center" : "w-[30%]"} flex flex-col justify-between`}>
            <div className="flex-col justify-center">
              {!isSmall && (
                <div className={`w-full text-black top-[16rem] left-10 z-30 text-4xl font-semibold`}>
                  <span>{"Qualified"}</span>
                </div>
              )}
              <div
                className={`w-full text-black top-[16rem] left-10 z-30 font-semibold ${
                  isSmall ? "pt-[1rem] text-sm" : "text-base"
                }`}
              >
                <div className="pt-[2rem]">
                  <span>
                    {
                      "All Day Homes under Inner Garden Education are directly regulated and monitored to ensure they provide premium and qualified services."
                    }
                  </span>
                </div>
                <div className="pt-[1rem]">
                  <span>
                    {
                      "We provide a strict outline to the environment, teaching tools and educator behavioral requirements. These requirements are regularly inspected by qualified Inner Garden Education inspecting agents, and Government Officals"
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-[2rem] w-full">
              <ButtonLink label={"Learn More"} href={"/posts/announcemnts"} color={"orange"} />
            </div>
          </div>
          {/* {############### TEXT ##############} */}
        </div>
      </div>
      <Divider className="pt-[5rem]" />
      {/* {############################################## END ###############################################} */}
      <div className={`pt-[5rem] flex items-center ${isSmall ? "flex-col" : ""}`}>
        {/* {############### ONE ##############} */}
        <div className={`w-full flex justify-between items-center flex-col ${isSmall ? "" : ""}`}>
          <div className="flex flex-col items-center">
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[70%]"
              } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75`}
            >
              <Image
                src={InnerGardenMainImg6_1}
                sizes="auto"
                fill
                alt="Group of women celebrating graduation from Inner Garden Education program"
              />
            </div>
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[70%]"
              } text-black text-base pt-[2rem] font-semibold h-[14rem]`}
            >
              <div>
                <span>
                  {"- Inner Garden Education provides bilingual child early education services in Calgary NW."}
                </span>
              </div>
              <div className="pt-[1rem]">
                <span>
                  {
                    "- We have trained staff, a well-sanitized environment, and many other friends who chose to join us."
                  }
                </span>
              </div>
            </div>
          </div>
          <div className={`pt-[2rem] ${isSmall ? "w-[100%]" : "w-[70%]"}`}>
            <ButtonLink label={"Find a Location for Your Child"} href={"/posts/announcemnts"} color={"orange"} />
          </div>
        </div>
        {/* {############### ONE ##############} */}
        {/* {############### TWO ##############} */}
        <div className={`w-full flex justify-between items-center flex-col ${isSmall ? "pt-[4rem]" : ""}`}>
          <div className="flex flex-col items-center">
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[70%]"
              } overflow-hidden rounded-lg aspect-[16/10] filter saturate-75`}
            >
              <Image
                src={InnerGardenMainImg6_2}
                sizes="auto"
                fill
                alt="Group of women celebrating graduation from Inner Garden Education program"
              />
            </div>
            <div
              className={`relative ${
                isSmall ? "w-[100%]" : "w-[70%]"
              } text-black text-base pt-[2rem] font-semibold h-[14rem]`}
            >
              <div>
                <span>
                  {
                    "- If you have a daycare home or want to join us to provide daycare service, we will provide training, service guidelines, and more…"
                  }
                </span>
              </div>
            </div>
          </div>
          <div className={`pt-[2rem] ${isSmall ? "w-[100%]" : "w-[70%]"}`}>
            <ButtonLink label={"Become an Educator"} href={"/posts/announcemnts"} color={"orange"} />
          </div>
        </div>
        {/* {############### TWO ##############} */}
      </div>
      <Divider className="pt-[5rem]" />
      {/* {############################################## END ###############################################} */}
      <div className={`flex ${isSmall ? "flex-col" : ""} pt-[5rem] mx-[5rem] justify-around items-center`}>
        <MainSummary
          label={"Five-Star Review"}
          subLabel={"The top reviewed day home services"}
          icon={IoCheckmarkSharp}
          isFirstChild={true}
        />
        <MainSummary
          label={"Top Quality Staffing"}
          subLabel={"All staffs are certified by Government of Alberta"}
          icon={IoDiamondOutline}
        />
        <MainSummary label={"Fresh Food"} subLabel={"Fresh meal prepared from scratch"} icon={IoNutritionOutline} />
      </div>
    </>
  );
};

export default MainOverviews;
