import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userEntityMock } from '../__mocks__/user.mock';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(userEntityMock),
            save: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should return user in findUserByEmail', async () => {
    const user = await userService.findUserByEmail(userEntityMock.email);

    expect(user.email).toEqual(userEntityMock.email);
  });

  it('should return error in findUserByEmail', async () => {
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

    expect(
      userService.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return error in findUserByEmail (error query)', async () => {
    jest
      .spyOn(userRepository, 'findOne')
      .mockRejectedValueOnce(new Error('Async error'));

    expect(
      userService.findUserByEmail(userEntityMock.email),
    ).rejects.toThrowError();
  });

  it('should return user by id in findUserById', async () => {
    const user = await userService.findUserById(userEntityMock.id);

    expect(user.id).toEqual(userEntityMock.id);
  });

  it('should return user relations in findUserByRelations', async () => {
    const user = await userService.findUserByRelations(userEntityMock.id);

    expect(user.id).toEqual(userEntityMock.id);
  });
});
