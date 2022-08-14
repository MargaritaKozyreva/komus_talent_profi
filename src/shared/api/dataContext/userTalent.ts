import { UserTalentType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class TalentData {
  getUserTalentByUserId(payload: {
    userId: string;
  }): ResponseResult<UserTalentType> {
    const data = httpService<UserTalentType>(
      "GET",
      "getUserTalentByUserId",
      `user_id=${payload.userId}`
    );
    return data;
  }

  getUserTalents(payload: { userId: string }): ResponseResult<UserTalentType> {
    const data = httpService<UserTalentType>(
      "GET",
      "get_talents",
      `user_id=${payload.userId}`
    );
    return data;
  }
}
