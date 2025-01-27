export interface PostPreview {
  title: string;
  section: string;
  userRole: number;
  userEmail: string;
  userFirstName: string;
  userLastName: string;
  isImportant?: boolean;
  content: string;
  createdTime: number;
  editedTime: null | number;
  postID: string;
}

// need to add updatedUserID for full veiw
