import { FooterLinkType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class FooterData {
    getFooterLinks(): ResponseResult<FooterLinkType[]> {
      const data = httpService<FooterLinkType[]>(
        "GET",
        "get_footer_links"
      );
      return data;
    }
  }
  