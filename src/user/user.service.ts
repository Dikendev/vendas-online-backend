import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(newUserDTO: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save(newUserDTO);
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
