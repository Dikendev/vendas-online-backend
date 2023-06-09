import { Controller, Get } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
 constructor(
  private readonly sev:UserService
 ){}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.sev.getAllUser();
  }
}
