import React from "react";
import { RESOURCE_TOPICS } from "@/app/constants";
import InnerGardenResourcesImg from "@/../public/InnerGarden-License.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import Link from "next/link";

const PublishedLicense = () => {
  return (
    <SideNavPageContainer title={"Resources"} sideTopics={RESOURCE_TOPICS}>
      <div className="py-[2rem] px-[2rem] flex flex-col">
        <div className="flex flex-col pb-[2rem]">
          <div className="flex flex-col">
            <span className="font-bold text-3xl">{"Government-Issued License"}</span>
          </div>
        </div>
        <div className="w-[70%] pb-[2rem] flex flex-col">
          <div className={`relative overflow-hidden rounded-lg aspect-[14/10] filter saturate-75`}>
            <Image src={InnerGardenResourcesImg} sizes="auto" fill alt="" />
          </div>
          <div className="text-[#333] text-sm font-normal italic pt-[1rem]">
            <span>{"Issued by Government of Alberta"}</span>
          </div>
        </div>
        <div className="text-base font-normal pb-[2rem]">
          <span>
            {`Under the `}
            <Link href={"https://open.alberta.ca/publications/e00p1"}>
              <span className="text-orange-400 underline">{`Early Learning and Child Care Act`}</span>
            </Link>{" "}
            <span>{` and `}</span>{" "}
            <Link href={"https://open.alberta.ca/publications/2008_143"}>
              <span className="text-orange-400 underline">{`Regulation`}</span>
              <span>
                {`, licensed family day home agencies recruit and train family day home educators who then offer child care from their homes. These programs can offer child care for up to 6 children (not including their own) in their homes.`}
              </span>
            </Link>
          </span>
        </div>
        <div className="text-base font-normal pb-[2rem]">
          <span>
            {`Licensed agencies help by offering family day home program educators a network for training, resources and assistance. Agencies provide assurance to parents using family day homes by monitoring each home to ensure they are meeting health, safety and program quality standards for children in their care as prescribed under the `}
            <Link href={"https://open.alberta.ca/publications/family-day-home-standards-manual-for-alberta"}>
              <span className="text-orange-400 underline">{`Family Day Home Standards`}</span>
              <span>{` and the act.`}</span>
            </Link>
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default PublishedLicense;
