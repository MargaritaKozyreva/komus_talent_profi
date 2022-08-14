import { FooterLinkType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { footerData } from "./items/footer";

export class FooterData {
  getFooterLinks(): ResponseResult<FooterLinkType[]> {
    const data = httpServiceMock<FooterLinkType[]>(footerData);
    return data;
  }
}
