import { UserType } from '@api/types';
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { expertsData } from "./items/expert";

export class ExpertData {
    getExpertListByGroupId(payload: {
    groupId: string;
  }): ResponseResult<UserType[]> {
    const data = httpServiceMock<UserType[]>(expertsData);
    return data;
  }
}
