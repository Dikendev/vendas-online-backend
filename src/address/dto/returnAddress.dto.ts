import { IsInt, IsString } from 'class-validator';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDTO {
  @IsString()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.numberAddress = address.numberAddress;
    this.cep = address.cep;
  }
}
