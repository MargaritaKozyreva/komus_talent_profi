import { ExpertContext } from "@shared/api/dataContext";

export const getExpertListByGroupId = async (groupId: string) => {
  const data = await ExpertContext.getExpertListByGroupId({ groupId });
  return data;
};
