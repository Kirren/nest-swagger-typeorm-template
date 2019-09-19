import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly _userRepository: Repository<UserEntity>
	) {
	}

	public async saveUser(requester: UserEntity): Promise<void> {
		await this._userRepository.save(requester);
	}
}
