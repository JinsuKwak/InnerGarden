import React from "react";
import { RESOURCE_TOPICS } from "@/app/constants";
import InnerGardenResourcesImg from "@/../public/InnerGarden-Main-4.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const AboutHomeAgencies = () => {
  return (
    <SideNavPageContainer title={"Resources"} sideTopics={RESOURCE_TOPICS}>
      <div className={`relative w-[100%] h-[10rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenResourcesImg} alt="" sizes="auto" />
      </div>
      <div className="py-[2rem] px-[2rem] flex flex-col">
        <div className="flex flex-col pb-[2rem]">
          <div className="text-3xl font-bold">
            <span>{"What is Licensed Family Day Home Agencies?"}</span>
          </div>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "As of February 2021, Alberta Government came up with new standards to regulate the Family Day Home in its regions. Under the Act, it clearly states that each family day home can only provide service for up to 6 children."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "Agencies are responsible to develop programs for their day homes, provide advice about nutritious meal planning and choose the adequate toys and equipment that ensures children’s safety and development. Only Family Day Home that registered under an Agency may qualify for wage top-up funding that benefits you. Each Family Day Home must be registered to legally operate. Contact your day home and query for information about what agency it belongs to."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>{"Choosing a Day Home under Inner Garden Education provide the following:"}</span>
        </div>
        <div className="flex text-base font-normal pb-[2rem]">
          <ul className="flex flex-col">
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Government Top-Up Funding`}</span>
            </li>
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Commercially Insured For Potential Accidents`}</span>
            </li>
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Professional Trained Educators`}</span>
            </li>
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Safer Environment`}</span>
            </li>
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Qualified Curriculums Prior To Elementary School`}</span>
            </li>
            <li className="pb-[1rem] pl-[1rem]">
              <span>{`- Nutrition Evaluated Meal Plans`}</span>
            </li>
          </ul>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default AboutHomeAgencies;
