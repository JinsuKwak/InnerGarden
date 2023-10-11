// import React from "react";
// import Container from "@/components/Container";
// import LanguageBar from "@/components/languages/LanguageBar";
// import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
// import { PREVEIW_NUM_PAGE } from "@/app/constants";
// import SideNavbar from "@/components/navigation/SideNavbar";
// import { ABOUT_US_TOPICS } from "@/app/constants";
// import InnerGardenMainImg2 from "@/../public/InnerGardenCarousel2.jpg";
// import Image from "next/image";

// const WhoAreWe = () => {
//   return (
//     <React.Fragment>
//       <Container>
//         <LanguageBar />
//         <div className="flex flex-col pt-[2rem]">
//           <div className="font-semibold text-4xl">
//             <span>{"About Us"}</span>
//           </div>
//           <div className="flex justify-between pt-[3rem]">
//             <SideNavbar topics={ABOUT_US_TOPICS} />
//             <div className="rounded-lg overflow-hidden w-[100%] max-w-[1200px] min-h-[30rem] ml-[4rem] shadow-md  flex flex-col">
//               <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
//                 <Image fill style={{ objectFit: "cover" }} src={InnerGardenMainImg2} alt="" />
//               </div>
//               <div className="p-[2rem]">
//                 <span>{"aboutus contain?er"}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default WhoAreWe;

import React from "react";
import Container from "@/components/Container";
import LanguageBar from "@/components/languages/LanguageBar";
import PostPreviewContainer from "@/components/posts/PostPreviewContainer";
import { PREVEIW_NUM_PAGE } from "@/app/constants";
import SideNavbar from "@/components/navigation/SideNavbar";
import { ABOUT_US_TOPICS } from "@/app/constants";
import InnerGardenAboutUsImg from "@/../public/InnerGarden-AboutUs-1.jpeg";
import Image from "next/image";

const WhoAreWe = () => {
  return (
    <React.Fragment>
      <Container>
        <LanguageBar />
        <div className="flex justify-between pt-[3rem]">
          <div className="flex flex-col justify-start">
            <div className="font-semibold text-4xl">
              <span>{"About Us"}</span>
            </div>
            <div className="pt-[4rem]">
              <SideNavbar topics={ABOUT_US_TOPICS} />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden w-[100%] max-w-[1200px] min-h-[40rem] ml-[4rem] shadow-md  flex flex-col">
            <div className={`relative w-[100%] h-[6rem] overflow-hidden filter saturate-75`}>
              <Image fill style={{ objectFit: "cover" }} src={InnerGardenAboutUsImg} alt="" sizes="auto" />
            </div>
            <div className="p-[2rem]">
              <span>{"aboutus contain?er"}</span>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default WhoAreWe;
