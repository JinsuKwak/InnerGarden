import React from "react";
import { PostPreview } from "@/types/PostPreview";
import { IconButton } from "@mui/material";
import transformToRole from "@/app/util/transformToRole";
import Link from "next/link";
import useIsSmall from "@/app/hooks/useIsSmall";
import { styled } from "@mui/material/styles";
import { FaTrashCan, FaRegFileLines } from "react-icons/fa6";
import useIsMedium from "@/app/hooks/useIsMedium";
import { formatTime } from "@//helpers/dayJS";

interface PostLinkProps {
  postPreview: PostPreview | null;
  isVeiwOnlyPage?: boolean;
  isMainPage: boolean;
  displaySections: boolean;
}

interface TempUser {
  userID: string;
  userRole: number;
}

const PostLinkProps = ({ postPreview, isVeiwOnlyPage, isMainPage, displaySections }: PostLinkProps) => {
  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const currentUser: TempUser = {
    userID: "4jnsu_ID",
    userRole: 2,
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
          <div className="flex text-base h-8 py-1 px-1 items-center justify-between">
            <div
              className={`flex items-center mr-[2rem] ${
                isSmall && isMainPage ? "w-[70%] mr-[1rem]" : "w-[60%]"
              }  justify-start `}
            >
              <div className={`flex justify-center w-[1.6rem] px-2 text-red-600 `}>
                {postPreview.isImportant ? "!" : ""}
              </div>
              {displaySections && (
                <Link href={"/posts/" + postPreview.section}>
                  <span className="flex w-[3.6rem] pr-2 justify-center hover:underline">
                    {postPreview.section === "announcement" ? "[annc]" : "[" + postPreview.section + "]"}
                  </span>
                </Link>
              )}
              <Link
                href={"/posts/" + postPreview.section + "/" + postPreview.postID}
                className="w-full truncate pl-[0.4rem]"
              >
                <span className={`pr-2 justify-center hover:underline capitalize`}>{postPreview.title}</span>
              </Link>
            </div>
            <div className="flex items-center w-[40%] justify-end">
              <div className={`flex items-center w-full ${isSmall ? "justify-end" : "justify-center"}`}>
                {!isSmall && (
                  <div className={`flex w-full items-center justify-end`}>
                    <span className={`flex w-[6.4rem] pr-2 justify-center`}>
                      {transformToRole(postPreview.userRole) === "Root Admin"
                        ? "Admin"
                        : transformToRole(postPreview.userRole)}
                    </span>
                    {!isMainPage && !isMedium && (
                      <>
                        <div className="truncate">
                          <span className="flex items-center justify-center capitalize w-[5rem]">
                            {postPreview.userFirstName}
                          </span>
                        </div>
                        {/* <span>{postPreview.userLastName}</span> */}
                      </>
                    )}
                    <span className={`flex px-2 w-[4rem] justify-center`}>
                      {formatTime(postPreview.createdTime.toString())}
                    </span>
                    {postPreview.editedTime && <span>{formatTime(postPreview.editedTime.toString())}</span>}
                  </div>
                )}
                {isSmall && (
                  <span className={`flex px-2 w-[4rem] justify-center`}>
                    {formatTime(postPreview.createdTime.toString())}
                  </span>
                )}

                {!isVeiwOnlyPage && (
                  <>
                    <StyledIconButton
                      disabled={!isEditable()}
                      className={`text-lg  transition-all ${
                        isEditable() ? "text-orange-300 hover:text-orange-500" : "text-none"
                      }`}
                    >
                      <FaRegFileLines />
                    </StyledIconButton>
                    <StyledIconButton
                      disabled={!isEditable()}
                      className={`text-lg  transition-all ${
                        isEditable() ? "text-red-300 hover:text-red-500" : "text-white"
                      }`}
                    >
                      <FaTrashCan />
                    </StyledIconButton>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black "></div>
        </>
      ) : (
        <>
          <div className="first:w-full first:border-t-[1px] first:border-black"></div>
          <div className="flex text-base h-8 py-1 px-1 items-center justify-between">
            {!isMainPage ? (
              <>
                <div
                  className={`flex items-center mr-[2rem] ${
                    isSmall && isMainPage ? "w-[70%] mr-[1rem]" : "w-[60%]"
                  }  justify-center `}
                >
                  <div className={`flex justify-center w-[1.6rem] px-2 text-red-600 `}>{""}</div>
                  {isMainPage && <span className="flex w-[3rem] pr-2 justify-center ">{""}</span>}

                  <span className={`pr-2 justify-center capitalize`}>{"-"}</span>
                </div>
                <div className="flex items-center w-[30%] justify-end">
                  <div className={`flex items-center w-full ${isSmall ? "justify-end" : "justify-center"}`}>
                    {!isSmall && (
                      <div className={`flex w-full items-center justify-end`}>
                        <span className={`flex w-[6.4rem] pr-2 justify-center`}>{"-"}</span>
                        {!isMainPage && !isMedium && (
                          <>
                            <div className="truncate">
                              <span className="flex items-center justify-center capitalize w-[5rem]">{"-"}</span>
                            </div>
                            {/* <span>{postPreview.userLastName}</span> */}
                          </>
                        )}
                        <span className={`flex px-2 w-[4rem] justify-center`}>{"-"}</span>
                      </div>
                    )}
                    {isSmall && <span className={`flex px-2 w-[4rem] justify-center`}>{"-"}</span>}

                    {!isVeiwOnlyPage && (
                      <>
                        <StyledIconButton disabled={true} className={`text-lg`}>
                          <FaRegFileLines />
                        </StyledIconButton>
                        <StyledIconButton disabled={true} className={`text-lg`}>
                          <FaTrashCan />
                        </StyledIconButton>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full flex justify-center items-end">
                <span>{"-"}</span>
              </div>
            )}
          </div>
          <div className="w-full border-b-[1px] border-gray-300 last:border-b-[1px] last:border-black "></div>
        </>
      )}
    </>
  );
};

export default PostLinkProps;

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:disabled": {
    color: "#fff",
  },
}));
