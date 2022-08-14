import { GroupType, UserType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { groupCollaboratorInfo, userGroupInfo } from './items/group';
import { tutorData } from './items/tutor';

export class GroupData {
  getUserGroupByUserId(payload: { userId: string }): ResponseResult<GroupType> {
    const data = httpServiceMock<GroupType>(userGroupInfo);
    return data;
  }
  getGroupTutorByGroupId(payload: {
    groupId: string;
  }): ResponseResult<UserType> {
    const data = httpServiceMock<UserType>(tutorData);
    return data;
  }
  getGroupCollaboratorsByGroupId(payload: {
    groupId: string;
  }): ResponseResult<UserType[]> {
    const data = httpServiceMock<UserType[]>(groupCollaboratorInfo);
    return data;
  }
}
