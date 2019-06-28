import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { CryptographerService } from 'src/auth/cryptographer.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {
  private exampleUser: User;

  constructor(
  //   @InjectRepository(User)
  //   private readonly userRepository: Repository<User>,
  ) { 
    this.exampleUser = new User();
    this.exampleUser.name = 'Test User 2';
    this.exampleUser.email = 'test.user@test.com';
    this.exampleUser.password = 't3stus3r';
    this.exampleUser.hashPassword();
  }

  public findByEmail(email: string): Promise<User> {
    return Promise.resolve(this.exampleUser);
    // return this.userRepository.findOne({
    //   where: { email }
    // });
  }

  public findById(id: number): Promise<User> {
    return Promise.resolve(this.exampleUser);
    // return this.userRepository.findOne({
    //   where: { id }
    // });
  }

  public create(user: CreateUserDto): Promise<User> {
    return Promise.resolve(this.exampleUser);
    // return this.userRepository.save(user);
  }
}
