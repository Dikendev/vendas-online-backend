import { IsNumber, IsString } from 'class-validator';
import { UserEntity } from '../entities/user.entity';
import { ReturnAddressDTO } from 'src/address/dto/returnAddress.dto';

export class ReturnUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;

  @IsString()
  address?: ReturnAddressDTO[];

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
    this.address = userEntity.address
      ? userEntity.address.map((address) => new ReturnAddressDTO(address))
      : undefined;
  }
}
