import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnnouncementServiceBase } from "./base/announcement.service.base";

@Injectable()
export class AnnouncementService extends AnnouncementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
