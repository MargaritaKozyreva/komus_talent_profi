import { ArticlesContext } from '@api/dataContext/fake';

export const getArticleById = async (articleId: string) => {
    const data = await ArticlesContext.getArticle({ articleId });
    return data;
  };
  
  export const getArticles = async () => {
    const data = await ArticlesContext.getArticles();
    return data;
  };
  