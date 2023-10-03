import React from "react";
import { PostPreview } from "@/types/PostPreview";
import { Button } from "@mui/material";
import transformToRole from "@/app/util/transformToRole";
import Link from "next/link";
import useIsSmall from "@/app/hooks/useIsSmall";

interface PostLinkProps {
  postPreview: PostPreview | null;
  isVeiwOnlyPage?: boolean;
  isMainPage: boolean;
}

interface TempUser {
  userID: string;
  userRole: number;
}

const PostLinkProps = ({ postPreview, isVeiwOnlyPage, isMainPage }: PostLinkProps) => {
  const isSmall = useIsSmall();
  const currentUser: TempUser = {
    userID: "4jnsu_ID",
    userRole: 2,
  };

  const formatTime = (time: number): string => {
    return "11/11";
  };

  const isEditable = (): boolean => {
    if (currentUser && postPreview) {
      if (postPreview.userID === currentUser.userID) {
        return true;
      }
      if (currentUser.userRole > postPreview.userRole) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      {postPreview ? (
        <>
          <div className="first:w-full first:border-t-[1px] first:border-black"></div>
          <div className="flex text-base h-8 py-1 px-1items-center justify-between">
            <div
              className={`flex items-center mr-[2rem] ${
                isSmall && isMainPage ? "w-[70%] mr-[1rem]" : "w-[63%]"
              }  justify-start `}
            >
              <div className={`flex justify-center w-[1.6rem] px-2 text-red-600 `}>
                {postPreview.isImportant ? "!" : ""}
              </div>
              {isMainPage && (
                <Link href={"/" + postPreview.section}>
                  <span className="flex w-[3rem] pr-2 justify-center hover:underline">
                    {postPreview.section === "announcement" ? "annc" : postPreview.section}
                  </span>
                </Link>
              )}
              <Link href={"/posts/" + postPreview.section + "/" + postPreview.postID} className="w-full truncate">
                <span className={`pr-2 justify-center hover:underline capitalize`}>{postPreview.title}</span>
              </Link>
            </div>
            <div className="flex items-center w-[30%] justify-end">
              <div className={`flex items-center w-full ${isSmall ? "justify-end" : "justify-center"}`}>
                {!isSmall && (
                  <div className={`flex w-full items-center ${isMainPage ? "justify-end" : "justify-center"}`}>
                    <span className={`flex w-[6.4rem] pr-2 justify-center`}>
                      {transformToRole(postPreview.userRole) === "Root Admin"
                        ? "Admin"
                        : transformToRole(postPreview.userRole)}
                    </span>
                    {!isMainPage && (
                      <>
                        <div className="truncate">
                          <span className="flex items-center justify-center capitalize w-[5rem]">
                            {postPreview.userFirstName}
                          </span>
                        </div>
                        {/* <span>{postPreview.userLastName}</span> */}
                      </>
                    )}
                  </div>
                )}
                <span className={`flex px-2 w-[4rem] justify-center`}>{formatTime(postPreview.createdTime)}</span>
                {postPreview.editedTime && <span>{formatTime(postPreview.editedTime)}</span>}
                {!isVeiwOnlyPage && isEditable() && (
                  <>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black "></div>
        </>
      ) : (
        //##########################################################
        <>
          <div className="first:w-full first:border-t-[1px] first:border-black"></div>
          <div className="flex text-base h-8 py-1 px-1items-center justify-between">
            <div
              className={`flex items-center mr-[2rem] ${
                isSmall && isMainPage ? "w-[70%] mr-[1rem]" : "w-[63%]"
              }  justify-start `}
            >
              <div className={`flex justify-center w-[1.6rem] px-2 text-red-600 `}>{""}</div>
              {isMainPage && <span className="flex w-[3rem] pr-2 justify-center hover:underline">{"-"}</span>}
              <span className={`pr-2 justify-center hover:underline capitalize`}>{"-"}</span>
            </div>
            <div className="flex items-center w-[30%] justify-end">
              <div className={`flex items-center w-full ${isSmall ? "justify-end" : "justify-center"}`}>
                {!isSmall && (
                  <div className={`flex w-full items-center ${isMainPage ? "justify-end" : "justify-center"}`}>
                    <span className={`flex w-[6.4rem] pr-2 justify-center`}>{"-"}</span>
                    {/* <div className="truncate">
                      <span className="flex items-center justify-center capitalize w-[5rem]">
                        {postPreview.userFirstName}
                      </span>
                    </div> */}
                    {/* <span>{postPreview.userLastName}</span> */}{" "}
                  </div>
                )}
                <span className={`flex px-2 w-[4rem] justify-center`}>{"-"}</span>
                <span>{"-"}</span>
                {!isVeiwOnlyPage && isEditable() && (
                  <>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black "></div>
        </>
      )}
    </>
  );
};

export default PostLinkProps;
