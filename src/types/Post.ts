export interface Post {
  title: string;
  section: string;
  userRole: number;
  userEmail: string;
  userFirstName: string;
  userLastName: string;
  content?: string;
  isImportant?: boolean;
  createdTime: number;
  editedTime: null | number;
  postID: string;
}
