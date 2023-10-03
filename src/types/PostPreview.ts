export interface PostPreview {
  title: string;
  section: string;
  userRole: number;
  userID: string;
  userFirstName: string;
  userLastName: string;
  isImportant?: boolean;
  createdTime: number;
  editedTime: null | number;
  postID: string;
}

// need to add updatedUserID for full veiw
