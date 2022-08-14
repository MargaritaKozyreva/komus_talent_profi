import { ArticleType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { articleData } from "./items/articles";

export class ArticleData {
  getArticles(): ResponseResult<ArticleType[]> {
    const data = httpServiceMock<ArticleType[]>(articleData);
    return data;
  }
  getArticle(payload: { articleId: string }): ResponseResult<ArticleType> {
    const data = httpServiceMock<ArticleType>(articleData[0]);
    return data;
  }
}
