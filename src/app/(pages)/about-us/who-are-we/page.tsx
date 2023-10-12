// "use client";
// import React from "react";
// import Container from "@/components/Container";
// import LanguageBar from "@/components/languages/LanguageBar";
// import SideNavbar from "@/components/navigation/SideNavbar";
// import { ABOUT_US_TOPICS } from "@/app/constants";
// import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpeg";
// import Image from "next/image";
// import useIsSmall from "@/app/hooks/useIsSmall";

// const WhoAreWe = () => {
//   const isSmall = useIsSmall();
//   return (
//     <React.Fragment>
//       <Container>
//         <LanguageBar />
//         <div
//           className={`flex ${
//             isSmall ? "flex-col justify-center items-center" : "justify-between"
//           }  pt-[3rem] pb-[5rem]`}
//         >
//           <div className="flex flex-col justify-start">
//             <div className={`font-semibold text-4xl ${isSmall ? "pb-[2rem]" : ""}`}>
//               <span>{"About Us"}</span>
//             </div>
//             {!isSmall && (
//               <div className="pt-[4rem]">
//                 <SideNavbar topics={ABOUT_US_TOPICS} />
//               </div>
//             )}
//           </div>
//           <div
//             className={` ${
//               isSmall ? "" : "ml-[4rem]"
//             } rounded-lg overflow-hidden w-[100%] max-w-[1200px] min-h-[40rem]  shadow-md  flex flex-col`}
//           >
//             <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
//               <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
//             </div>
//             <div className="p-[2rem] flex flex-col">
//               <div className="text-xl font-[500] pb-[2rem]">
//                 <span>{"Discover Inner Garden Education's Story"}</span>
//               </div>
//               <div className="text-base pb-[1rem]">
//                 <span>
//                   {
//                     "Since 2009, Inner Garden Education has been a trusted provider of exceptional services in the heart of North West Calgary's Hidden Valley community. With 15 years of experience, we've honed our commitment to excellence."
//                   }
//                 </span>
//               </div>
//               <div className="text-base pb-[1rem]">
//                 <span>
//                   {
//                     "Our approach to Early Childhood Education is characterized by an engaging, pleasant, and informative curriculum. We're dedicated to creating an environment where children's formative years are filled with meaningful growth and joyful learning."
//                   }
//                 </span>
//               </div>
//               <div className="text-base">
//                 <span>
//                   {
//                     "At Inner Garden, we believe in nurturing each child's unique potential, offering an enriching experience that goes beyond traditional education. Join us on this delightful educational journey, where every child's precious years are celebrated and transformed into a foundation for a bright future."
//                   }
//                 </span>
//               </div>
//             </div>
//           </div>
//           {isSmall && (
//             <div className="pt-[4rem] w-full">
//               <SideNavbar topics={ABOUT_US_TOPICS} width={"w-[100%]"} isSmall={true} />
//             </div>
//           )}
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default WhoAreWe;

import React from "react";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpeg";
import Image from "next/image";
import SideNavPageContainer from "@/components/bases/SideNavPageContainer";

const WhoAreWe = () => {
  return (
    <SideNavPageContainer topics={ABOUT_US_TOPICS}>
      <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
        <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
      </div>
      <div className="p-[2rem] flex flex-col">
        <div className="text-xl font-[500] pb-[2rem]">
          <span>{"Discover Inner Garden Education's Story"}</span>
        </div>
        <div className="text-base pb-[1rem]">
          <span>
            {
              "Since 2009, Inner Garden Education has been a trusted provider of exceptional services in the heart of North West Calgary's Hidden Valley community. With 15 years of experience, we've honed our commitment to excellence."
            }
          </span>
        </div>
        <div className="text-base pb-[1rem]">
          <span>
            {
              "Our approach to Early Childhood Education is characterized by an engaging, pleasant, and informative curriculum. We're dedicated to creating an environment where children's formative years are filled with meaningful growth and joyful learning."
            }
          </span>
        </div>
        <div className="text-base">
          <span>
            {
              "At Inner Garden, we believe in nurturing each child's unique potential, offering an enriching experience that goes beyond traditional education. Join us on this delightful educational journey, where every child's precious years are celebrated and transformed into a foundation for a bright future."
            }
          </span>
        </div>
      </div>
    </SideNavPageContainer>
  );
};

export default WhoAreWe;
