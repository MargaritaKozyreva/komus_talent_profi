import { INews } from "@shared/api/interfaces";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { programData } from "./items/program";

export class ProgramData {
  getAboutProgram(payload: { programCode: string }): ResponseResult<INews[]> {
    if (payload.programCode === "about_program") {
      const data = httpServiceMock<INews[]>(programData);
      return data;
    }
    return null
  }
}
