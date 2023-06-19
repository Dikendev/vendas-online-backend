import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);

    if(user?.password !== pass) {
      throw new UnauthorizedException();
    }
    console.log(user.password, pass)
    const {password, ...result} = user;

    return result;
  }
}
