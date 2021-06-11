import { User } from '../../../../domain/user';

interface CreateUserDto {
  name: string;
  age: number;
}

const toCreateUserDto = (user: User): CreateUserDto => {
  return { name: user.name, age: user.age };
};

export { CreateUserDto, toCreateUserDto };
