import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { LoginDTO } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  
  constructor(
  @InjectRepository(UserEntity)
    private userService: UserService) {}

  async login(loginDTO: LoginDTO): Promise<UserEntity> {
    const user: UserEntity | undefined = await this.userService
      .findUserByEmail(loginDTO.email)
      .catch(() => undefined);
    
    console.log(user);

    const isMatch = await compare(loginDTO.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException(`Email or password invalid`);
    }

    return user;
  }
}
