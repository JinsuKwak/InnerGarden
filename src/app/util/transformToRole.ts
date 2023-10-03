const transformToRole = (role: number): string => {
  switch (role) {
    case 1:
      return "Educator";
    case 2:
      return "Admin";
    case 3:
      return "Root Admin";

    default:
      return "User";
  }
};

export default transformToRole;
