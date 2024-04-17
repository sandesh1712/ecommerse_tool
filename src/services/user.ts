import { Repository } from "typeorm";
import { User } from "../entity/User";
import AppDataSource from "../data-source";
import { Basket } from "../entity/Basket";
import { PasswordHelper } from "../helpers/passwordHelper";
import { BasketStatus } from "../types/basket";

export default class UserService {
  userRepository: Repository<User>;
  basketRepository: Repository<Basket>;
  passwordHelper: PasswordHelper;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
    this.basketRepository = AppDataSource.getRepository(Basket);
    this.passwordHelper = new PasswordHelper();
  }

  async create(obj) {
    if(!obj.password)
      throw "Password is not provided!!";
    const encryptedPassword = await this.passwordHelper.encrypt(obj.password);
    obj.password = encryptedPassword;
    const user = await this.userRepository.create([obj])[0];
    Object.assign(user,{basket: [new Basket()]});
    return this.userRepository.save(user);
  }

  async getBasket(userId) {
    const user = new User();
    user.id = userId;
    return this.basketRepository.findOneBy({user,status: BasketStatus.ACTIVE})
  }

  async findUserById(userId) {
    return await this.userRepository.findOneBy({ id: parseInt(userId) });
  }
}
