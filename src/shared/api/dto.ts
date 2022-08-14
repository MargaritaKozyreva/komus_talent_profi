import {
  ArticleType,
  GroupType,
  RateType,
  UserTalentType,
  UserType,
} from "./types";

export interface GroupDTO {
  tutor: UserType;
  groupUsers: UserType[];
}
export interface RateListItemDTO {
  placeInRaiting: number;
  groupName: string;
  groupId: string;
  curator: UserType;
  talentsCount: UserTalentType['talents'];
}
export interface CuratorItemDTO {
  tutors: UserType[];
}

export interface ArticleDTO {
  articles: ArticleType[];
}

export interface userWidgetsDTO {
  group: GroupType;
  rate: RateType;
}
