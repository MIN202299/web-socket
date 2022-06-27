import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createWebSocket } from './websocket/create-websocket';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

createWebSocket(4000);
