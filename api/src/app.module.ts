import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { UserService } from './repositories/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [UserService],
  exports: [UserService]
})
export class AppModule {}
