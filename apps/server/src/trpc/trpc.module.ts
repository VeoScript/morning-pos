import { Module } from '@nestjs/common';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';
import { PrismaService } from '@server/prisma/prisma.service';
import { UsersService } from '@server/users/users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcRouter, TrpcService, PrismaService, UsersService],
})
export class TrpcModule {}
