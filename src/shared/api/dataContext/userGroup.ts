import { GroupType, UserTalentType, UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class GroupData {
  getUserGroupByUserId(payload: { userId: string }): ResponseResult<GroupType> {
    const data = httpService<GroupType>(
      "GET",
      "getUserGroupByUserId",
      `user_id=${payload.userId}`
    );
    return data;
  }
  getGroupTutorByGroupId(payload: { groupId: string }): ResponseResult<UserType> {
    const data = httpService<UserType>(
      "GET",
      "get_tutor",
      `group_id=${payload.groupId}`
    );
    return data;
  }
  getGroupCollaboratorsByGroupId(payload: { groupId: string }): ResponseResult<UserType[]> {
    const data = httpService<UserType[]>(
      "GET",
      "get_members",
      `group_id=${payload.groupId}`
    );
    return data;
  }
}

