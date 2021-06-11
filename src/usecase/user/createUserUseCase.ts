import { User } from '../../domain/user';
import { UserRepository } from '../../interface/database/repository/user/userRepository';
import { toCreateUserDto } from '../../interface/database/repository/user/dto';

class CreateUserUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    const userDto = toCreateUserDto(user);
    return this.userRepository.create(userDto);
  }
}

export { CreateUserUseCase };
