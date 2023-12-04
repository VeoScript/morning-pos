import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from '@server/trpc/trpc.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    credentials: true,
    // origin:
    //   process.env.NODE_ENV || 'development'
    //     ? process.env.DEV_ORIGIN_URL
    //     : process.env.PROD_ORIGIN_URL,
  });

  const trpc = app.get(TrpcRouter);

  trpc.applyMiddleware(app);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
