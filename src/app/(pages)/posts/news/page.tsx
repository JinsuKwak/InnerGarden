"use client";
import React from "react";
import { POST_TOPICS } from "@/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
import { PREVEIW_NUM_PAGE } from "@/constants";
import Link from "next/link";

const News = () => {
  return (
    <SideNavPageContainer title={"Posts"} sideTopics={POST_TOPICS}>
      <div className={`relative w-[100%] h-[9rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="flex flex-col">
        <div className="p-[2rem] flex flex-col">
          <div className="font-semibold text-[1em] w-full hover:underline pb-[0.6rem]">
            <Link href="/posts/news">
              <span>{`News`}</span>
            </Link>
          </div>
          <div className="pb-[4rem]">
            <PostPreviewContainer
              isMainPage={false}
              sections={["news"]}
              postsPerPage={PREVEIW_NUM_PAGE}
              isVeiwOnlyPage={true}
              showBlank={true}
              displaySections={true}
            />
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default News;
