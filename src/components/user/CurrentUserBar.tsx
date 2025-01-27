import React from "react";
import { User } from "@/types/User";
import transformToRole from "@/app/util/transformToRole";

interface CurrentUserBarProps {
  currentUser?: User | null;
}

const CurrentUserBar = ({ currentUser }: CurrentUserBarProps) => {
  console.log(currentUser);
  return (
    currentUser && (
      <div className="w-[100%] h-[2rem] bg-transparent flex items-center justify-end mt-[5rem]">
        <div className="flex flex-col w-[100%] justify-end h-fit items-start text-xs px-[1rem]">
          <div className="flex pb-[0.2rem] justify-center items-center">
            <div className="pr-[0.4rem]">
              <span>{`Welcome!`}</span>
            </div>
            <div className="pr-[0.4rem]">
              <span className="capitalize">{currentUser.userFirstName}</span>
            </div>
            <div className="">
              <span className="capitalize">{currentUser.userLastName}</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-[0.4rem]">
              <span>{`Role:`}</span>
            </div>
            <div className="">
              <span className="capitalize">{transformToRole(currentUser.userRole)}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center h-[100%] w-[5rem] text-xs uppercase mx-[1rem] rounded-md hover:cursor-pointer hover:text-orange-400 hover:underline transition-all">
          <span>{`Sign Out`}</span>
        </div>
      </div>
    )
  );
};

export default CurrentUserBar;
