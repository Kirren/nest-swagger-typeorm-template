import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";

const Entities = TypeOrmModule.forFeature([UserEntity]);

@Module({
	controllers: [UserController],
	providers: [UserService],
	imports: [Entities]
})
export class UserModule {
}
