import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnnouncementModuleBase } from "./base/announcement.module.base";
import { AnnouncementService } from "./announcement.service";
import { AnnouncementController } from "./announcement.controller";
import { AnnouncementResolver } from "./announcement.resolver";

@Module({
  imports: [AnnouncementModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnnouncementController],
  providers: [AnnouncementService, AnnouncementResolver],
  exports: [AnnouncementService],
})
export class AnnouncementModule {}
