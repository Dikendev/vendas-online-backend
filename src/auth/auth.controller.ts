import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReturnSign } from './dto/returnLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  @Post()
  signIn(@Body() signInDTO: Record<string, any>): Promise<ReturnSign>{
    return this.authService.signIn(signInDTO.email, signInDTO.password);
  }
}
