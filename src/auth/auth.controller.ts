import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ReturnUserDto } from 'src/user/dto/returnUser.dto';
import { LoginDTO } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() loginDTO: LoginDTO): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.authService.login(loginDTO));
  }
}