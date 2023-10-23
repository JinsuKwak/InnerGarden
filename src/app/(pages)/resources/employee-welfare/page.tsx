import React from "react";
import { RESOURCE_TOPICS } from "@/constants";
import InnerGardenResourcesImg from "@/../public/InnerGarden-Main-3.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const EmployeeWelfare = () => {
  return (
    <SideNavPageContainer title={"Resources"} sideTopics={RESOURCE_TOPICS}>
      <div className="py-[2rem] px-[2rem] flex flex-col">
        <div className="flex flex-col pb-[2rem]">
          <div className="flex flex-col">
            <span className="font-bold text-3xl">{"Empowered Educators, Joyful Learners: "}</span>
            <span className="font-normal text-lg italic">
              {"Inner Garden Education – Cultivating Happiness Together"}
            </span>
          </div>
        </div>
        <div className="w-[70%] pb-[2rem]">
          <div className={`relative overflow-hidden rounded-lg aspect-[14/10] filter saturate-75`}>
            <Image src={InnerGardenResourcesImg} sizes="auto" fill alt="" priority={true} />
          </div>
        </div>
        <div className="text-lg font-semibold pb-[2rem]">
          <span>
            {
              "Employee Welfare: Inner Garden Education – A Strong Backbone for Educators and A Prosperous Garden for Children"
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "In the vibrant realm of Alberta’s early childhood education, Inner Garden Education (IG) shines not only as a beacon of educational excellence but also as a stalwart champion of employee welfare and development. We stand as a home – a nurturing ground for children, a secure haven for parents, and a strong backbone for our devoted educators."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "In the sea of average wages in Alberta and across the nation, IG proudly sets the bar higher. We offer the most competitive compensation package in the industry, reflecting our unwavering belief in investing in our educators. However, our commitment to our staff goes well beyond just a superior salary."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "At IG, we act as a strong backbone for all our educators, providing profound support to help them achieve their life goals. We are dedicated to fostering an environment that encourages professional growth, nurtures individual strengths, and rewards dedication. Many of our educators have risen through the ranks to become partners, thus realizing their potential and contributing meaningfully to IG’s success story."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "We are pioneers in developing such a supportive system, which allows our educators to focus their energies on what truly matters – caring for and educating our children. Our teacher-student ratio is deliberately kept low, at 1:5.5 compared to the average 1:8.9 ratio in most daycare centres. This intentional structure ensures that every child receives personalized care and guidance, fostering a deep bond between our educators and the children they nurture."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "This unique focus on employee welfare directly benefits our students. Happy, motivated, and well-supported educators can fully commit to fostering an enriching educational environment. Our educators can form deeper relationships with the children, understanding their unique needs, interests, and potentials, and fostering their curiosity and love for learning."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "To prospective educators, we extend an invitation: Join us and be part of a community that values your well-being, supports your life goals, and provides you with opportunities for professional growth. At IG, you are more than just an employee – you are an integral part of a team dedicated to shaping the future of our children."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "To parents, we promise: At IG, our educators, supported by our robust system, are committed to giving your children the best possible start in life. We ensure your children receive personalized, loving care and quality education from motivated, happy, and well-supported educators."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "Join the IG family and experience the difference. With us, every child is a unique ‘spring’ in our ‘rose’, and every educator is a crucial pillar of our thriving ‘garden’. Together, we’ll cultivate a brighter future, one child, one educator at a time. Inner Garden Education is the strong backbone to educators and the prosperous garden to children – let’s nurture this ecosystem for an even brighter tomorrow."
            }
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default EmployeeWelfare;
