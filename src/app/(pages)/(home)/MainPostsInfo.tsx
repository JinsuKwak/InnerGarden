"use client";
import React from "react";
import PostPreviewContainer from "../../../components/posts/PostPreviewContainer";
import useIsSmall from "@/app/hooks/useIsSmall";
import { FaEarthAmericas, FaHeadset } from "react-icons/fa6";
import Link from "next/link";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { PREVEIW_NUM_MAIN } from "@/app/constants";

const MainPostsInfo = () => {
  const isSmall = useIsSmall();
  const [isHoveredHeadset, setIsHoveredHeadset] = useState(false);
  const [isHoveredEarth, setIsHoveredEarth] = useState(false);
  const baseColor = "text-neutral-700";
  const hoverColor = "text-orange-400";
  return (
    <div className={`w-full ${isSmall ? "flex-col" : "flex"}`}>
      <div className={`flex flex-col w-full`}>
        <Link href="/posts">
          <span className="font-semibold text-[1em] w-full hover:underline">Latest Post</span>
        </Link>
        <div className={`w-full ${isSmall ? "flex-col" : "flex justify-between"}`}>
          <div className={`${isSmall ? "w-full" : "w-[60%]"}`}>
            <PostPreviewContainer
              isMainPage={true}
              sections={["announcement", "news"]}
              postsPerPage={PREVEIW_NUM_MAIN}
              isVeiwOnlyPage={true}
              showBlank={true}
            />
          </div>

          {isSmall && (
            <>
              <Divider />
            </>
          )}

          <div className={`flex text-[4rem] items-center ${isSmall ? "justify-center pt-6" : "justify-end"}`}>
            <div className="flex justify-center items-center">
              <div
                className={`flex flex-col px-4 py-2 hover:${hoverColor} transition-all`}
                onMouseEnter={() => setIsHoveredHeadset(true)}
                onMouseLeave={() => setIsHoveredHeadset(false)}
              >
                <Link href="/contact">
                  <FaHeadset className={`${isHoveredHeadset ? hoverColor : baseColor}  transition-all`} size={70} />
                </Link>
                <span
                  className={`text-[1rem] pt-[0.2rem] ${
                    isHoveredHeadset ? hoverColor : baseColor
                  } text-center items-center font-semibold transition-all`}
                >
                  Contact
                </span>
              </div>
              <Box className={`w-[2px] ${"bg-neutral-700"} h-[6rem] mx-2`} />
              <div
                className={`flex flex-col px-4 py-2 hover:${hoverColor} transition-all`}
                onMouseEnter={() => setIsHoveredEarth(true)}
                onMouseLeave={() => setIsHoveredEarth(false)}
              >
                <Link href="/locations">
                  <FaEarthAmericas className={`${isHoveredEarth ? hoverColor : baseColor} transition-all`} size={70} />
                </Link>
                <span
                  className={`text-[1rem] pt-[0.2rem] ${
                    isHoveredEarth ? hoverColor : baseColor
                  } text-center items-center font-semibold transition-all`}
                >
                  Locations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPostsInfo;
