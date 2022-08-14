import { ModuleType, UserType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { modulesData, moduleData } from './items/module';

export class RoadmapData {
  getModules(): ResponseResult<ModuleType[]> {
    const data = httpServiceMock<ModuleType[]>(modulesData);
    return data;
  }
  getModuleById(payload: { moduleId: string }): ResponseResult<ModuleType> {
    const data = httpServiceMock<ModuleType>(moduleData);
    return data;
  }
}
