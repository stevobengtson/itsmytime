import { Module } from '@nestjs/common';
import { CryptographerService } from './cryptographer.service';
import { AuthController } from './auth.controller';
import { UserService } from '../repositories/user.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [CryptographerService, UserService],
})
export class AuthModule {}
