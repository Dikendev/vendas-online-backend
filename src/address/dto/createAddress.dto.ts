import { IsInt, IsOptional, IsString, isInt } from 'class-validator';

export class CreateAddressDTO {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;
}
