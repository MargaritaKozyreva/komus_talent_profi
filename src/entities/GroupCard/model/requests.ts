import { GroupContext } from "@shared/api/dataContext";

export const getGroupCollaboratorsByGroupId = async (groupId: string) => {
  const data = await GroupContext.getGroupCollaboratorsByGroupId({ groupId });
  return data;
};

export const getUserGroupByUserId = async (userId: string) => {
  const data = await GroupContext.getUserGroupByUserId({ userId });
  return data;
};
export const getGroupTutorByGroupId = async (groupId: string) => {
  const data = await GroupContext.getGroupTutorByGroupId({ groupId })
  return data;
};
