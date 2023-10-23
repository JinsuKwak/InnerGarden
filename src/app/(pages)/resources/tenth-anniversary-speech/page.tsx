import React from "react";
import { RESOURCE_TOPICS } from "@/constants";
import InnerGardenResourcesImg from "@/../public/InnerGarden-Resources-1.jpg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const TenthAnniversarySpeech = () => {
  return (
    <SideNavPageContainer title={"Resources"} sideTopics={RESOURCE_TOPICS}>
      <div className={`relative w-[100%] h-[10rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenResourcesImg} alt="" sizes="auto" priority={true} />
      </div>
      <div className="py-[2rem] px-[2rem] flex flex-col">
        <div className="flex flex-col pb-[2rem]">
          <div className="text-3xl font-bold">
            <span>{"Inner Garden 10th Anniversary Speech"}</span>
          </div>
          <div className="text-base pb-[1rem] italic">
            <span>{"- Writing by: Bing Liu (Founder & Director)  September, 2017"}</span>
          </div>
        </div>
        <div className="text-base pb-[2rem]">
          <span>{"“There are millions of roses in a spring, but only one spring in a rose.”"}</span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "Our goal in the past ten years at IG has been to provide our students with the right start in their life’s educational journey."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "As I reflected in 2017:  Why do parents trust their kids to IG? Why do our colleagues choose to stay at IG? Why do our partners choose to cooperate with IG? After a year of reflection, the answer is clear! IG is not just a school for our children, our parents, and our employees, but it is also a home… a home for all of us!"
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "Since the establishment of IG in 2009, we have never stopped learning and moving forward. It all began with a love for children and a desire to educate them. We formally established the first branch in 2011 and expanded our program by hiring professional teachers and educators. In 2013, we found an educational curriculum based on the needs of children of different ages to enhance their growth. It has been a prosperous ten years, and we’ve been fortunate to be a part of nearly a hundred children’s educational journeys. Together we’ve grown, explored, and drew from lessons learned from the East and the West. Instead of the oppressive potential of children as the usual style of the East, the secret to children’s growth is the free and open upbringing as in the West. Let children grow healthy and happy with the right amount of companionship and encouragement."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "One to three-year-olds learns best by building companionship to integrate group education, social and empathy skills, learn how to get along with others and follow the rules, and understand the importance of teamwork. Our goal at this stage is to have healthy and happy children who build independence and self-confidence."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "Children over the age of three continue to build their independence and confidence but become more curious about the world around them. IG strengthens children’s knowledge in this age group and helps children find their points of interest and develop their potential through various instructive curricula."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "For parents, we strive to keep their children healthy and happy by ensuring their physical, emotional, and educational needs are met so they can feel at ease at work. We take care of each child’s growth needs and provide the appropriate observation and assistance individually."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "In addition to cultivating children, IG has trained more than 15 preschool teachers and worked with six colleagues to realize their potential. The current IG staff has more than ten people, with most having been part of the IG family for more than five years. We firmly believe in our staff’s ability to grow and develop with our children; to feel joy along with them; to laugh along with them. Our teachers are very proud to be a part of the IG family and to see their impact on people’s lives. Furthermore, as our teachers continue to develop, and when conditions are just right, they have the opportunity to become partners to expand their potential and horizons further."
            }
          </span>
        </div>
        <div className="text-base pb-[2rem]">
          <span>
            {
              "As I reflect upon my journey at IG, there have been many positives… from the children to the parents to the staff.   I am blessed to be surrounded by all these wonderful people. I look forward to continuing our prosperous journey together and having an even brighter tomorrow."
            }
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default TenthAnniversarySpeech;
