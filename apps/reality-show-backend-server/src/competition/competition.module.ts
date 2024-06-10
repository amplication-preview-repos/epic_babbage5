import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompetitionModuleBase } from "./base/competition.module.base";
import { CompetitionService } from "./competition.service";
import { CompetitionController } from "./competition.controller";
import { CompetitionResolver } from "./competition.resolver";

@Module({
  imports: [CompetitionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompetitionController],
  providers: [CompetitionService, CompetitionResolver],
  exports: [CompetitionService],
})
export class CompetitionModule {}
