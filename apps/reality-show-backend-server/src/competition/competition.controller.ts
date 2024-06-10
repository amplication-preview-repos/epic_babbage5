import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompetitionService } from "./competition.service";
import { CompetitionControllerBase } from "./base/competition.controller.base";

@swagger.ApiTags("competitions")
@common.Controller("competitions")
export class CompetitionController extends CompetitionControllerBase {
  constructor(
    protected readonly service: CompetitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
