import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { UsersService } from '@server/users/users.service';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly usersService: UsersService,
  ) {}

  usersRouters = this.trpc.router({
    getUsers: this.trpc.procedure.query(() => {
      return this.usersService.findAll();
    }),
  });

  appRouter = this.trpc.mergeRouters(this.usersRouters);

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
