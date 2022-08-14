import { ProgramContext } from "@api/dataContext";

export const getAboutProgram = async (programCode: string) => {
  const data = await ProgramContext.getAboutProgram({ programCode });
  return data;
};
