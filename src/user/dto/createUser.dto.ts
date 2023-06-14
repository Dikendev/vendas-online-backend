import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;
  
  @IsString()
  password: string;
}