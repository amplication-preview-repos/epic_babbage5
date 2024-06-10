/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Photo as PrismaPhoto } from "@prisma/client";

export class PhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PhotoCountArgs, "select">): Promise<number> {
    return this.prisma.photo.count(args);
  }

  async photos<T extends Prisma.PhotoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoFindManyArgs>
  ): Promise<PrismaPhoto[]> {
    return this.prisma.photo.findMany<Prisma.PhotoFindManyArgs>(args);
  }
  async photo<T extends Prisma.PhotoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoFindUniqueArgs>
  ): Promise<PrismaPhoto | null> {
    return this.prisma.photo.findUnique(args);
  }
  async createPhoto<T extends Prisma.PhotoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoCreateArgs>
  ): Promise<PrismaPhoto> {
    return this.prisma.photo.create<T>(args);
  }
  async updatePhoto<T extends Prisma.PhotoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoUpdateArgs>
  ): Promise<PrismaPhoto> {
    return this.prisma.photo.update<T>(args);
  }
  async deletePhoto<T extends Prisma.PhotoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhotoDeleteArgs>
  ): Promise<PrismaPhoto> {
    return this.prisma.photo.delete(args);
  }
}
