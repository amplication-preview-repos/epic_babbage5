import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompetitionServiceBase } from "./base/competition.service.base";

@Injectable()
export class CompetitionService extends CompetitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
