import { CreateUserRequest } from '../request/user/createUserRequest';
import UserUseCase from '../../usecase/user';
import { User } from '../../domain/user';
import { UserSerializer, UserResponse } from '../serializer/userSerializer';
import { UserRepositoryImpl } from '../database/mysql/userRepositoryImpl';

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepositoryImpl;

  public constructor(dbConnection: DbConnection) {
    this.userRepository = new UserRepositoryImpl(dbConnection);
  }

  public async createUser(req: CreateUserRequest): Promise<Response<UserResponse> {
    try {
      const userParams = new CreateUserRequest(req.body);
      const useCase = new UserUseCase.CreateUserUseCase(this.userRepository);
      const user = new User(null, userParams.name, userParams.age);
      let result = await useCase.createUser(user);
      return this.userSerializer(result);
    } catch(error){
      return this.userSerializer.error(error);
    }
  };
}
