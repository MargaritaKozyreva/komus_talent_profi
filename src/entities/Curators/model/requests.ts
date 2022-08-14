import { CuratorContext } from "@shared/api/dataContext";

export const getCuratorListByCode = async (code: string) => {
  const data = await CuratorContext.getCuratorListByGroupId({code})
  return data;
};
