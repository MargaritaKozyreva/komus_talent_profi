import { CuratorContext } from '@shared/api/dataContext/fake';

export const getCuratorListByGroupId = async (groupId: string) => {
    const data = await CuratorContext.getCuratorListByGroupId({groupId})
    return data;
  };
  