import { UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class CuratorData {
  getCuratorListByGroupId(payload: {
    code: string;
  }): ResponseResult<UserType[]> {
    const data = httpService<UserType[]>(
      "GET",
      "get_curators",
      `code=${payload.code}`
    );
    return data;
  }
}
