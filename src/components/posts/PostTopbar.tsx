"use client";
import React from "react";
import useIsSmall from "@/app/hooks/useIsSmall";
import useIsMedium from "@/app/hooks/useIsMedium";

interface PostTopbarProps {
  isVeiwOnlyPage?: boolean;
  isMainPage: boolean;
  displaySections: boolean;
}

const PostTopbar = ({ isVeiwOnlyPage, isMainPage, displaySections }: PostTopbarProps) => {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();

  return (
    <div className="flex h-8 py-1 px-1 w-full border-t-[2px] border-black text-base justify-between items-center uppercase">
      <div className={`flex ${isSmall && isMainPage ? "w-[70%] mr-[1rem]" : "w-[60%]"} items-center `}>
        {displaySections && (
          <div className="flex justify-center items-center min-w-[4.8rem] w-[4.8rem] pr-2 border-r-[1px] border-[#999]">
            <span>{`Section`}</span>
          </div>
        )}
        <div className="flex justify-center w-[70%] pr-2 ">
          <span>{`Title`}</span>
        </div>
      </div>
      <div className="flex items-center w-[40%] justify-end">
        {!isSmall && (
          <div className={`flex w-full items-center justify-end`}>
            <div className="flex w-[6.2rem] min-w-[6.2rem] pr justify-center border-x-[1px] border-[#999]">
              <span>{`Role`}</span>
            </div>
            {!isMainPage && !isMedium && (
              <div className="flex items-center justify-center w-[5.4rem] min-w-[5.4rem] truncate border-r-[1px] border-[#999]">
                <span>{`User`}</span>
              </div>
            )}
            {isVeiwOnlyPage ? (
              <div className={`flex px-2 w-[4rem] min-w-[4rem] justify-center`}>
                <span>{`Date`}</span>
              </div>
            ) : (
              <div className={`flex px-2 w-[4rem] min-w-[4rem] justify-center border-r-[1px] border-[#999]`}>
                <span>{`Date`}</span>
              </div>
            )}
          </div>
        )}
        {isSmall && !isVeiwOnlyPage && (
          <div className={`flex px-2 w-[4rem] min-w-[4rem] justify-center border-x-[1px] border-[#999]`}>
            <span>{`Date`}</span>
          </div>
        )}
        {isSmall && isVeiwOnlyPage && (
          <div className={`flex px-2 w-[4rem] min-w-[4rem] justify-center  border-l-[1px] border-[#999]`}>
            <span>{`Date`}</span>
          </div>
        )}
        {!isVeiwOnlyPage && (
          <div className={`flex px-2 w-[4.2rem]  min-w-[4.2rem] justify-center`}>
            <span>{`Edit`}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostTopbar;
