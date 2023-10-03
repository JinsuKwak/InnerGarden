import { transformedPostPreviews } from "../../stubData/postData";
import { PostPreview } from "@/types/PostPreview";

export default async function fetchPostPreviews(sections: string[]) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts: PostPreview[] = [];

      sections.forEach((section) => {
        const filteredPreviews = transformedPostPreviews.filter((preview) => preview.section === section);
        posts.push(...filteredPreviews);
      });

      resolve(posts);
    }, 2000); // 2 seconds delay
  });
}
