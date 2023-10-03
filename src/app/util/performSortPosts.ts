import React from "react";
import { PostPreview } from "@/types/PostPreview";

const performSortPosts = (posts: PostPreview[], sortBy: string): PostPreview[] => {
  const importantPosts = posts.filter((post) => post.isImportant);
  const nonImportantPosts = posts.filter((post) => !post.isImportant);

  switch (sortBy) {
    case "createdTime_asc":
      return [
        ...importantPosts.sort((a, b) => a.createdTime - b.createdTime),
        ...nonImportantPosts.sort((a, b) => a.createdTime - b.createdTime),
      ];

    case "createdTime_dec":
      return [
        ...importantPosts.sort((a, b) => b.createdTime - a.createdTime),
        ...nonImportantPosts.sort((a, b) => b.createdTime - a.createdTime),
      ];

    case "firstName_asc":
      return [
        ...importantPosts.sort((a, b) => a.userFirstName.localeCompare(b.userFirstName)),
        ...nonImportantPosts.sort((a, b) => a.userFirstName.localeCompare(b.userFirstName)),
      ];

    case "firstName_dec":
      return [
        ...importantPosts.sort((a, b) => b.userFirstName.localeCompare(a.userFirstName)),
        ...nonImportantPosts.sort((a, b) => b.userFirstName.localeCompare(a.userFirstName)),
      ];

    default:
      return [
        ...importantPosts.sort((a, b) => a.createdTime - b.createdTime),
        ...nonImportantPosts.sort((a, b) => a.createdTime - b.createdTime),
      ];
  }
};

export default performSortPosts;
