import { GroupType, ModuleType, UserTalentType, UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class RoadmapData {
  getModules(): ResponseResult<ModuleType[]> {
    const data = httpService<ModuleType[]>("GET", "get_modules");
    return data;
  }
  getModuleById(payload: { moduleId: string }): ResponseResult<ModuleType> {
    const data = httpService<ModuleType>(
      "GET",
      "getModuleById",
      `moduleId=${payload.moduleId}`
    );
    return data;
  }
}
