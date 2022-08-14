import { RateListItemDTO } from '@api/dto';
import { RateType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class RateData {
  getUserRateByUserId(payload: {
    userId: string;
  }): ResponseResult<RateType> {
    const data = httpService<RateType>(
      "GET",
      "get_user_rating",
      `user_id=${payload.userId}`
    );
    return data;
  }

  getRateListByRaitingId(payload: {
    raitingId: number;
  }): ResponseResult<RateListItemDTO[]> {
    if(payload.raitingId === 1){
          const data = httpService<RateListItemDTO[]>(
          "GET",
          "get_general_rating",
          `raiting_id=${payload.raitingId}`
        );
        return data;
    } else if(payload.raitingId === 2){
    
          const data = httpService<RateListItemDTO[]>(
          "GET",
          "get_mygroup_rating",
          `raiting_id=${payload.raitingId}`
        );
        return data;
    } else if(payload.raitingId === 3){
   
          const data = httpService<RateListItemDTO[]>(
          "GET",
          "get_allgroup_rating",
          `raiting_id=${payload.raitingId}`
        );
        return data;
    }

    return null
  }
}
