import { FooterContext } from "@api/dataContext/fake";

export const getFooterLinks = async () => {
  const data = await FooterContext.getFooterLinks()
  return data;
};
