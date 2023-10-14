"use client";
import React from "react";
import { POST_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
import { PREVEIW_NUM_PAGE } from "@/app/constants";
import Link from "next/link";

const Announcements = () => {
  return (
    <SideNavPageContainer title={"Posts"} sideTopics={POST_TOPICS}>
      <div className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="font-semibold text-[1em] w-full hover:underline pb-[0.6rem]">
          <Link href="/posts/announcements">
            <span>{`Announcements`}</span>
          </Link>
        </div>
        <div className="pb-[4rem">
          <PostPreviewContainer
            isMainPage={false}
            sections={["announcement"]}
            postsPerPage={15}
            isVeiwOnlyPage={true}
            showBlank={true}
            displaySections={false}
          />
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Announcements;
