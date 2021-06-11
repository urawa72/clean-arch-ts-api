import { User } from '../../../../domain/user';
import { CreateUserDto } from './dto';

interface UserRepository {
  create(user: CreateUserDto): Promise<User>;
}

export { UserRepository };
