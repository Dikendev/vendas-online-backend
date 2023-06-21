import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDTO } from './dto/createAddress.dto';
import { UserService } from '../user/user.service';
import { CityService } from '../city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService,
  ) {}

  async createAddressDTO(
    createAddressDTO: CreateAddressDTO,
    userId: number,
  ) {
    await this.userService.getUserById(userId);
    await this.cityService.findCityById(createAddressDTO.cityId);

    return this.addressRepository.save({
      ...createAddressDTO,
      userId,
    });
  }
}
