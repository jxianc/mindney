import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  hello(userId: number) {
    return `hi, user${userId}`;
  }

  getUserById(userId: number): Promise<User> {
    const user = this.userRepository.findOne({ id: userId });
    return user ? user : null;
  }
}
