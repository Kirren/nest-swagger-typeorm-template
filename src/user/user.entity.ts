import { Entity } from "typeorm";
import { UserRequestDto } from "../dto/userRequest.dto";

@Entity()
export class UserEntity extends UserRequestDto {
}
