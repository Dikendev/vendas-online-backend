import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDTO } from './dto/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../user/enum/role.enum';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Roles(Role.Admin)
  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDTO: CreateAddressDTO,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {

    return this.addressService.createAddressDTO(createAddressDTO, userId);
  }
}
