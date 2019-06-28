import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { UserService } from '../repositories/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  public login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.findByEmail(loginUserDto.email);
  }

  @Post('register')
  public register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('data')
  // @UseGuards(AuthGuard())
  public testData() {
    return { message: 'Success' };
  }
}