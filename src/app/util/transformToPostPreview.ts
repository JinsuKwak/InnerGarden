import { PostPreview } from "@/types/PostPreview";

const transformToPostPreview = (data: unknown): PostPreview[] => {
  const dataArray = data as any[] | undefined;

  if (!dataArray) {
    // If data is undefined, return an empty array
    return [];
  }

  return dataArray.map((item) => {
    return {
      title: item.title || "",
      section: item.section || "",
      userRole: item.userRole || "",
      userID: item.userID || "",
      userFirstName: item.userFirstName || "",
      userLastName: item.userLastName || "",
      isImportant: item.isImportant || false,
      createdTime: item.createdTime || 0,
      editedTime: item.editedTime || null,
      postID: item.postID || 0,
    };
  });
};

export default transformToPostPreview;
