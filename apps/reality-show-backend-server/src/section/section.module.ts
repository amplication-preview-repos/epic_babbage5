import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SectionModuleBase } from "./base/section.module.base";
import { SectionService } from "./section.service";
import { SectionController } from "./section.controller";
import { SectionResolver } from "./section.resolver";

@Module({
  imports: [SectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SectionController],
  providers: [SectionService, SectionResolver],
  exports: [SectionService],
})
export class SectionModule {}
