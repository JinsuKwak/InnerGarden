import React, { useEffect, useState } from "react";
import getPosts from "@/app/actions/getPostPreviews";
import PostLink from "./PostLink";
import { PREVEIW_NUM_MAIN } from "@/constants";
import performSortPosts from "@/app/util/performSortPosts";
import { PostPreview } from "@/types/PostPreview";
import { toast } from "react-toastify";
import transformToPostPreview from "@/app/util/transformToPostPreview";
import { Button } from "@mui/material";
import PostTopbar from "./PostTopbar";
import PostPagination from "./PostPagination";

interface PostPreviewContainerProps {
  isMainPage: boolean;
  sections: string[];
  postsPerPage: number;
  isVeiwOnlyPage: boolean;
  showBlank: boolean;
  displaySections: boolean;
  sort?: string;
}

// const PostPreviewContainer = ({
//   isMainPage,
//   sections,
//   postsPerPage,
//   isVeiwOnlyPage,
//   showBlank,
//   displaySections,
//   sort = "createdTime_dec",
// }: PostPreviewContainerProps) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [sortBy, setSortBy] = useState(sort);
//   const [allPostPreviews, setAllPostPreviews] = useState<PostPreview[]>([]);
//   const [visiblePostPreviews, setVisiblePostPreviews] = useState<PostPreview[]>([]);
//   const [currentBaseIdx, setCurrentBaseIdx] = useState(0);

//   const clickToNextPage = () => {
//     if (currentBaseIdx + postsPerPage >= allPostPreviews.length) {
//       setCurrentBaseIdx(currentBaseIdx);
//     } else {
//       setCurrentBaseIdx(currentBaseIdx + postsPerPage);
//     }
//   };

//   const clickToPrevPage = () => {
//     if (currentBaseIdx - postsPerPage > 0) {
//       setCurrentBaseIdx(currentBaseIdx - postsPerPage);
//     } else {
//       setCurrentBaseIdx(0);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getPosts(sections);
//         const transformedPreviews = transformToPostPreview(result);
//         const sortedPreviews = performSortPosts(transformedPreviews, sortBy);
//         setAllPostPreviews(sortedPreviews);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//         toast.warning("Failed to load posts.");
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     // Update visible post previews when all post previews or starting index changes
//     const newVisiblePostPreviews = allPostPreviews.slice(currentBaseIdx, currentBaseIdx + postsPerPage);
//     setVisiblePostPreviews(newVisiblePostPreviews);
//   }, [allPostPreviews, currentBaseIdx, postsPerPage]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Calculate the number of blank posts needed on the last page
//   const numBlankPosts =
//     showBlank && visiblePostPreviews.length < postsPerPage ? postsPerPage - visiblePostPreviews.length : 0;

//   // Create an array of blank posts
//   const blankPosts = Array.from({ length: numBlankPosts }, (_, i) => (
//     <PostLink key={`blank_${i}`} postPreview={null} isMainPage={isMainPage} displaySections={displaySections} />
//   ));

//   return (
//     <div className="flex flex-col">
//       {!isMainPage && (
//         <PostTopbar isVeiwOnlyPage={isVeiwOnlyPage} isMainPage={isMainPage} displaySections={displaySections} />
//       )}

//       <div className="w-full h-fit">
//         {visiblePostPreviews.map((postPreview, i) => (
//           <PostLink
//             key={i}
//             postPreview={postPreview}
//             isVeiwOnlyPage={isVeiwOnlyPage}
//             isMainPage={isMainPage}
//             displaySections={displaySections}
//           />
//         ))}
//         {blankPosts}
//       </div>
//       {/* <Button onClick={clickToPrevPage} className={"h-3 w-3"}>
//         Prev
//       </Button>
//       <Button onClick={clickToNextPage} className={"h-3 w-3"}>
//         NEXT
//       </Button> */}
//       <PostPagination
//         setCurrentBaseIdx={setCurrentBaseIdx}
//         postsPerPage={postsPerPage}
//         currentBaseIdx={currentBaseIdx}
//         allPostsLength={allPostPreviews.length}
//       />
//       <div className="flex w-full border-b-[1px] border-black text-base justify-between items-center uppercase"></div>
//     </div>
//   );
// };

// export default PostPreviewContainer;

const PostPreviewContainer = ({
  isMainPage,
  sections,
  postsPerPage,
  isVeiwOnlyPage,
  showBlank,
  displaySections,
  sort = "createdTime_dec",
}: PostPreviewContainerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(sort);
  const [allPostPreviews, setAllPostPreviews] = useState<PostPreview[]>([]);
  const [visiblePostPreviews, setVisiblePostPreviews] = useState<PostPreview[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPostPreviews.length / postsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPosts(sections);
        const transformedPreviews = transformToPostPreview(result);
        const sortedPreviews = performSortPosts(transformedPreviews, sortBy);
        setAllPostPreviews(sortedPreviews);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.warning("Failed to load posts.");
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections, sortBy]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const newVisiblePostPreviews = allPostPreviews.slice(startIndex, startIndex + postsPerPage);
    setVisiblePostPreviews(newVisiblePostPreviews);
  }, [allPostPreviews, currentPage, postsPerPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Calculate the number of blank posts needed on the last page
  const numBlankPosts =
    showBlank && visiblePostPreviews.length < postsPerPage ? postsPerPage - visiblePostPreviews.length : 0;

  // Create an array of blank posts
  const blankPosts = Array.from({ length: numBlankPosts }, (_, i) => (
    <PostLink key={`blank_${i}`} postPreview={null} isMainPage={isMainPage} displaySections={displaySections} />
  ));

  return (
    <div className="flex flex-col">
      {!isMainPage && (
        <PostTopbar isVeiwOnlyPage={isVeiwOnlyPage} isMainPage={isMainPage} displaySections={displaySections} />
      )}

      <div className="w-full h-fit">
        {visiblePostPreviews.map((postPreview, i) => (
          <PostLink
            key={i}
            postPreview={postPreview}
            isVeiwOnlyPage={isVeiwOnlyPage}
            isMainPage={isMainPage}
            displaySections={displaySections}
          />
        ))}
        {blankPosts}
      </div>
      {!isMainPage && (
        <>
          <PostPagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
          <div className="flex w-full border-b-[1px] border-black text-base justify-between items-center uppercase"></div>
        </>
      )}
    </div>
  );
};

export default PostPreviewContainer;
