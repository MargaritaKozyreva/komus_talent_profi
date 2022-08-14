import { INews } from "@shared/api/interfaces";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { modalData } from "./items/modal";

export class ModalData {
  getModalInfo(payload: { articleCode: string }): ResponseResult<INews[]> {
    if(payload.articleCode === "gemification_rules"){
      const data = httpServiceMock<INews[]>(modalData);
      return data;
    }
    return null
  }
}
