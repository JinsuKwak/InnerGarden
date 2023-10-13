import React from "react";
import { RESOURCE_TOPICS } from "@/app/constants";
import InnerGardenResourcesImg from "@/../public/InnerGarden-Resources-1.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import Link from "next/link";

const Subsidy = () => {
  const subsidyRates = [
    { incomeRange: "0 to 119,999", fullTimeRate: "$266" },
    { incomeRange: "120,000 to 124,999", fullTimeRate: "$253" },
    { incomeRange: "125,000 to 129,999", fullTimeRate: "$239" },
    { incomeRange: "$130,000 to $134,999", fullTimeRate: "$226" },
    { incomeRange: "$135,000 to $139,999", fullTimeRate: "$213" },
    { incomeRange: "$140,000 to $144,999", fullTimeRate: "$200" },
    { incomeRange: "$145,000 to $149,999", fullTimeRate: "$186" },
    { incomeRange: "$150,000 to $154,999", fullTimeRate: "$173" },
    { incomeRange: "$155,000 to $159,999", fullTimeRate: "$160" },
    { incomeRange: "$160,000 to $164,999", fullTimeRate: "$146" },
    { incomeRange: "$165,000 to $169,999", fullTimeRate: "$133" },
    { incomeRange: "$170,000 to $174,999", fullTimeRate: "$120" },
    { incomeRange: "$175,000 to $179,999", fullTimeRate: "$106" },
  ];

  return (
    <SideNavPageContainer title={"Resources"} sideTopics={RESOURCE_TOPICS}>
      <div className={`relative w-[100%] h-[10rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenResourcesImg} alt="" sizes="auto" />
      </div>
      <div className="py-[2rem] px-[2rem] flex flex-col pb-[3rem]">
        <div className="flex flex-col pb-[3rem]">
          <div className="text-3xl font-bold">
            <span>{"Alberta Child Care Subsidy & Grant"}</span>
          </div>
        </div>
        <div className="flex flex-col pb-[2rem]">
          {/* {#################################### Subsidy #####################################} */}
          <div className="text-xl font-semibold pb-[2rem]">
            <span>{"Subsidy: "}</span>
          </div>
          <div className="text-base font-normal pb-[1rem]">
            <span>
              {
                "If your child is enrolled in our licensed family day home program at Inner Garden Education, you will be eligible to apply for subsidies. The subsidy rates vary based on the child’s age, family income, the childcare program, and the number of hours a child attends each month"
              }
            </span>
          </div>
          <div className="text-base font-normal pb-[2rem]">
            <span>
              {
                "The subsidies we offer include a subsidy for children 0 to kindergarten-age (in kindergarten and also attending child care during regular school hours), a preschool subsidy for children enrolled in a licensed preschool program and an extended hours subsidy for children who require care outside regular hours. Additionally, starting January 2022, Child care in Alberta will be more affordable under the new federal-provincial child care agreement. Fees will be lowered through expanded subsidies and affordability grants."
              }
            </span>
          </div>
          <div className="flex flex-col items-center pb-[4rem]">
            <div className="text-base font-semibold pb-[2em] flex flex-col">
              <span className="text-center">{"Table 1. Maximum subsidy rates for children 0 to kindergarten age"}</span>
              <span className="text-center">
                {" (in kindergarten and also attending child care during regular school hours)"}
              </span>
            </div>
            <div className="text-base font-normal flex flex-col">
              <table className="table-auto ">
                <thead>
                  <tr>
                    <th className="border border-b-2 border-black px-4 py-2">Family Annual Income ($)</th>
                    <th className="border border-b-2 border-black px-4 py-2">Full-time rate (100+ hours)</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidyRates.map((rate) => (
                    <tr key={rate.incomeRange}>
                      <td className="border border-black px-4 py-2">{rate.incomeRange}</td>
                      <td className="border border-black px-4 py-2">{rate.fullTimeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-sm text-gray-500 italic pt-[0.4rem]">
                <span>{"Part-time rates are prorated based on hours (80 hours = 80% of the full-time rate)"}</span>
              </div>
            </div>
          </div>
          {/* {#################################### Subsidy #####################################} */}
          <hr className="pb-[4rem]"></hr>
          {/* {#################################### Grant #####################################} */}
          <div className="text-xl font-semibold pb-[2rem]">
            <span>{"Grant: "}</span>
          </div>
          <div className="text-base font-normal pb-[1rem]">
            <span>
              {
                "Inner Garden Education day homes will be receiving additional funding from the government that will be used to lower the fees for our families. This reduction in fees is a result of the Alberta government’s agreement with the federal government to increase access to affordable and high-quality child care for families."
              }
            </span>
          </div>
          <div className="text-base font-normal pb-[2rem]">
            <span>
              {
                "All parents of children zero to kindergarten age will benefit from reduced fees through affordability grants. Funding is provided directly to operators and is to be used specifically to reduce fees."
              }
            </span>
          </div>
          <div className="flex flex-col items-center pb-[4rem]">
            <div className="text-base font-semibold pb-[2em] flex flex-col">
              <span className="text-center">
                {"Table 2. Affordability grants for licensed facility-based and home-based child care"}
              </span>
            </div>
            <div className="text-base font-normal flex flex-col max-w-[36rem]">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border border-b-2 border-black px-4 py-2">Child Age Group</th>
                    <th className="border border-b-2 border-black px-4 py-2">
                      Inner Garden Education Licensed Day Homes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-black">
                    <td className="border border-black px-4 py-2">Infant (Under 19 months)</td>
                    <td className="border border-black px-4 py-2">$350</td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-4 py-2">Toddler (19 months to under 3 years)</td>
                    <td className="border border-black px-4 py-2">$325</td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-4 py-2">Preschool Age (3 years to kindergarten age)</td>
                    <td className="border border-black px-4 py-2">$300</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">
                      Preschool Program (Part-time programming for 4 or less hours per day for children 19 months up to
                      kindergarten)
                    </td>
                    <td className="border border-black px-4 py-2">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-l-4 border-black p-[0.5rem] justify-around">
          <div className="text-lg font-semibold pl-[1rem]">
            <span>{"The above information is subject to the website of the government department"}</span>
          </div>
          <div className="text-sm font-normal">
            <span className="pl-[1rem]">
              {`Source: `}
              <Link href={"https://www.alberta.ca/federal-provincial-child-care-agreement"}>
                <span className="text-orange-400 underline ">{`https://www.alberta.ca/federal-provincial-child-care-agreement.aspx`}</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default Subsidy;
