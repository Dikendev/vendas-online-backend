import { UserEntity } from '../entities/user.entity';
import { Role } from '../enum/role.enum';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'diego',
  email: 'diege@gmail.com',
  phone: '23232',
  cpf: '123232',
  createdAt: new Date(),
  password: '22323',
  typeUser: Role.User,
  updatedAt: new Date(),
};
