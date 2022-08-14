import { RateListItemDTO } from "@api/dto";
import { RateType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import {
  generalRateListByRaitingId,
  groupRateListByRaitingId,
  userRateInfo,
  userRateListInGroupByRaitingId,
} from "./items/rate";

export class RateData {
  getUserRateByUserId(payload: { userId: string }): ResponseResult<RateType> {
    const data = httpServiceMock<RateType>(userRateInfo);
    return data;
  }

  getRateListByRaitingId(payload: {
    raitingId: string;
    filterId: number;
  }): ResponseResult<RateListItemDTO[]> {
    if (payload.filterId === 1) {
      const data = httpServiceMock<RateListItemDTO[]>(
        generalRateListByRaitingId
      );
      return data;
    }
    if (payload.filterId === 2) {
      const data = httpServiceMock<RateListItemDTO[]>(
        userRateListInGroupByRaitingId
      );
      return data;
    }
    if (payload.filterId === 3) {
      const data = httpServiceMock<RateListItemDTO[]>(groupRateListByRaitingId);
      return data;
    }

    return null;
  }
}
