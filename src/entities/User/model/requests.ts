import { UserContext } from "@shared/api/dataContext";

export const getUserRequestStateByUserId = async (userId: string) => {
  const data = await UserContext.getUserRequestStatus({ userId });
  return data;
};
