// import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

// export async function getSession() {
//   return await getServerSession(authOptions);
// }

export default function getCurrentUser() {
  //   try {
  //     const session = await getSession();

  //     if (!session?.user?.email) {
  //       return null;
  //     }

  //     const currentUser = await prisma?.user.findUnique({
  //       where: {
  //         email: session.user.email,
  //       },
  //     });

  //     if (!currentUser) {
  //       return null;
  //     }

  //     return currentUser;
  //   } catch (error) {
  //     return null;
  //   }
  return {
    userID: 324325143,
    userEmail: "rootAdmin@InnerGarden.ca",
    userHashedPassward: "aawef1rfawef",
    userRole: 3,
    userFName: "Jinsu",
    userLName: "kwak",
  };
}
