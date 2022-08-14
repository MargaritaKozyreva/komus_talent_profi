import { INews } from "@shared/api/interfaces";
import { httpService, ResponseResult } from "@shared/service/service";

export class ModalData {
  getModalInfo(payload: { articleCode: string }): ResponseResult<INews[]> {
      const data = httpService<INews[]>("GET", "get_about_modal", `articleCode=${payload.articleCode}`);
      return data;
  }
}
