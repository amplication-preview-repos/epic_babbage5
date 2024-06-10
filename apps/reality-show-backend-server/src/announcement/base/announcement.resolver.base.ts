/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Announcement } from "./Announcement";
import { AnnouncementCountArgs } from "./AnnouncementCountArgs";
import { AnnouncementFindManyArgs } from "./AnnouncementFindManyArgs";
import { AnnouncementFindUniqueArgs } from "./AnnouncementFindUniqueArgs";
import { DeleteAnnouncementArgs } from "./DeleteAnnouncementArgs";
import { AnnouncementService } from "../announcement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Announcement)
export class AnnouncementResolverBase {
  constructor(
    protected readonly service: AnnouncementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async _announcementsMeta(
    @graphql.Args() args: AnnouncementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Announcement])
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "any",
  })
  async announcements(
    @graphql.Args() args: AnnouncementFindManyArgs
  ): Promise<Announcement[]> {
    return this.service.announcements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Announcement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "read",
    possession: "own",
  })
  async announcement(
    @graphql.Args() args: AnnouncementFindUniqueArgs
  ): Promise<Announcement | null> {
    const result = await this.service.announcement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Announcement)
  @nestAccessControl.UseRoles({
    resource: "Announcement",
    action: "delete",
    possession: "any",
  })
  async deleteAnnouncement(
    @graphql.Args() args: DeleteAnnouncementArgs
  ): Promise<Announcement | null> {
    try {
      return await this.service.deleteAnnouncement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
