"use client";
import React from "react";
import Container from "@/components/Container";
import LanguageBar from "@/components/languages/LanguageBar";
import SideNavbar from "@/components/navigation/SideNavbar";
import useIsSmall from "@/app/hooks/useIsSmall";

interface SideNavContainerProps {
  children: React.ReactNode;
  title: String;
  sideTopics: {
    label: string;
    href: string;
  }[];
}

const SideNavPageContainer = ({ children, title, sideTopics }: SideNavContainerProps) => {
  const isSmall = useIsSmall();
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <div
          className={`flex ${
            isSmall ? "flex-col justify-center items-center" : "justify-between"
          }  pt-[3rem] pb-[5rem]`}
        >
          <div className="flex flex-col justify-start">
            <div className={`font-semibold text-4xl ${isSmall ? "pb-[2rem]" : ""}`}>
              <span>{title}</span>
            </div>
            {!isSmall && (
              <div className="pt-[4rem]">
                <SideNavbar topics={sideTopics} />
              </div>
            )}
          </div>
          <div
            className={` ${
              isSmall ? "" : "ml-[4rem]"
            } rounded-lg overflow-hidden w-[100%] max-w-[1200px] min-h-[40rem]  shadow-md  flex flex-col`}
          >
            {children}
          </div>
          {isSmall && (
            <div className="pt-[4rem] w-full">
              <SideNavbar topics={sideTopics} width={"w-[100%]"} isSmall={true} />
            </div>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SideNavPageContainer;
