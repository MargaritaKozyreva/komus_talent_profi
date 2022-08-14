import { UserTalentType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { talentCountInfo } from './items/talents';


export class TalentData {
  getUserTalents(payload: { userId: string }): ResponseResult<UserTalentType> {
    const data = httpServiceMock<UserTalentType>(talentCountInfo);
    return data;
  }
}
