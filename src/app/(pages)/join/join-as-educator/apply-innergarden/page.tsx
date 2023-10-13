import React from "react";
import { JOIN_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-5.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";
import Link from "next/link";
import ButtonLink from "@/components/buttons/ButtonLink";

const ApplyInnerGarden = () => {
  return (
    <SideNavPageContainer title={"Join Us"} sideTopics={JOIN_US_TOPICS}>
      <div className={`relative w-[100%] h-[11rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col h-[100%]">
        <div className="flex flex-col h-[100%] justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-col pb-[1rem]">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"A Rewarding Career Awaits:"}</span>
              </div>
              <div className="text-base font-normal pb-[2rem]">
                <span>{`At Inner Garden, we are all about nurturing young minds and empowering them to grow. As an Inner Garden Educator, you’ll have the privilege of shaping young lives, teaching valuable life skills, and fostering a love for learning that can last a lifetime.`}</span>
              </div>
            </div>
            <div className="flex flex-col pb-[1rem]">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"How to Apply:"}</span>
              </div>
              <div className="text-base font-normal pb-[2rem]">
                <span>{`Interested in joining our team? Follow the steps below to start your application process:`}</span>
              </div>
              <div className="flex text-base font-normal pb-[2rem]">
                <ul className="flex flex-col">
                  <li className="pb-[1rem]">
                    <span>
                      {`1. `}
                      <span className="font-bold">
                        {`Read and Understand the Role: `}
                        <span className="font-normal">{`Before proceeding, make sure you have a clear understanding of the role and responsibilities of a Dayhome Educator.`}</span>
                      </span>
                    </span>
                  </li>
                  <li className="pb-[1rem]">
                    <span>
                      {`2. `}
                      <span className="font-bold">
                        {`Contact us and schedule an online meeting: `}
                        <Link href={"/contact"}>
                          <span className="text-orange-400 underline font-normal">{`Send us an email or give us a call`}</span>
                        </Link>
                      </span>
                    </span>
                  </li>
                  <li className="pb-[1rem]">
                    <div className="flex flex-col">
                      <span className="pb-[0.5rem]">
                        {`3. `}
                        <span className="font-bold">
                          {`Complete the Application: `}
                          <span className="font-normal">{`Fill out the Dayhome Educator Application Form. Be prepared to provide detailed personal information, background, qualifications, and a personal statement.`}</span>
                        </span>
                      </span>
                      <span className="font-bold italic pl-[1rem] pb-[0.5rem] text-sm">
                        {`* There is a non-refundable application fee of $219. `}
                        <span className="font-normal">{`This fee covers the administrative costs associated with the review and processing of your application.`}</span>
                      </span>
                      <span className="font-bold italic pl-[1rem] pb-[0.5rem] text-sm">
                        {`* Please be aware that the application fee does not guarantee acceptance. `}
                        <span className="font-normal">{`All applications are subject to a thorough review and screening process, including reviewing from Government of Alberta, and not all applicants will pass this stage.`}</span>
                      </span>
                    </div>
                  </li>
                  <li className="pb-[1rem]">
                    <span>
                      {`4. `}
                      <span className="font-bold">
                        {`Submit Your Application: `}
                        <span className="font-normal">{`Once you’ve completed the application and paid the fee, submit your application. Applications without the appropriate fee will not be considered.`}</span>
                      </span>
                    </span>
                  </li>
                  <li className="">
                    <span>
                      {`5. `}
                      <span className="font-bold">
                        {`Wait for Our Response: `}
                        <span className="font-normal">{`Our team will review your application and get back to you as soon as possible.`}</span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col text-base font-normal">
              <div className="text-xl font-bold pb-[2rem]">
                <span>{"Questions or Need Assistance?"}</span>
              </div>
              <div className="pb-[2rem] flex flex-col">
                <span>{`If you have any questions or need assistance during the application process, feel free to reach out to us.`}</span>
                <span>{`Our team is here to help you! You can contact us through the following options:`}</span>
              </div>
              <div className=" pb-[1rem]">
                <span className="pl-[1rem]">
                  {`Phone: `}
                  <a href="tel:+18258631772" className="text-orange-400 underline">
                    {`+1 (825) 863-1772`}
                  </a>
                </span>
              </div>
              <div className="pb-[2rem]">
                <span className="pl-[1rem]">
                  {`E-mail: `}
                  <a href="mailto:reception@innergardenedu.com" className="text-orange-400 underline">
                    {`reception@innergardenedu.com`}
                  </a>
                </span>
              </div>
              <span className="pb-[1rem]">
                {`Additionally, you might find the answers to your queries in our Frequently Asked Questions (FAQ) section. `}
                <Link href={"/FAQ"}>
                  <span className="text-orange-400 underline font-normal">{`Check it out`}</span>
                </Link>
              </span>
              <div className="pb-[2rem]">
                <span>{"We look forward to assisting you on your journey with Inner Garden Education!"}</span>
              </div>
            </div>
          </div>
          <div className="w-[24rem] flex justify-center">
            <ButtonLink
              href={
                "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdYdOjxEEkUUYdA0e1-OlXRwhFHG_DIcg_lpzd-I80TlOCWPA%2Fviewform%3Fusp%3Dsf_link&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSdYdOjxEEkUUYdA0e1-OlXRwhFHG_DIcg_lpzd-I80TlOCWPA%2Fviewform%3Fusp%3Dsf_link&ifkv=AYZoVhfxrxVm3l2qBx24YNm3HrpH2cMiVYOCZRz8s29W6jBKJqqh1QFDGdG4jJqZ6J6G6ZWYweEWJQ&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-855634502%3A1697092233685532&theme=glif"
              }
              label="Educator Application Form"
              color="orange"
            />
          </div>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default ApplyInnerGarden;

// Questions or Need Assistance?
// If you have any questions or need assistance during the application process, feel free to reach out to us. Our team is here to help you! You can contact us through the following options:

// - **Email:** [info@innergardenedu.com](mailto:info@innergardenedu.com)
// - **Phone:** [+1 (825) 863-1772](tel:+18258631772)

// Additionally, you might find the answers to your queries in our Frequently Asked Questions (FAQ) section. Check it out [here](#faq-link).

// We look forward to assisting you on your journey with Inner Garden Education!
