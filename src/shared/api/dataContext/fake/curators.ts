import { UserType } from '@api/types';
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { curatorsData } from "./items/curator";

export class CuratorData {
  getCuratorListByGroupId(payload: {
    groupId: string;
  }): ResponseResult<UserType[]> {
    const data = httpServiceMock<UserType[]>(curatorsData);
    return data;
  }
}
