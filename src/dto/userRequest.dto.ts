import { Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsEnum, IsString, IsUUID } from "class-validator";

type UserType = "user" | "admin" | "support";

export class UserRequestDto {
	@PrimaryGeneratedColumn({
		type: "uuid"
	})
	@ApiModelProperty({
		description: "User unique ID"
	})
	@IsUUID()
	public placementId!: string;

	@Column({
		nullable: false
	})
	@ApiModelProperty({
		example: "username@domain.com",
		description: "User email",
		required: true
	})
	@IsString()
	@IsEmail()
	@IsDefined()
	public email: string;

	@Column({
		nullable: false
	})
	@ApiModelProperty({
		example: "John Doe",
		description: "User full name"
	})
	public username: string;

	@Column({
		type: "enum",
		enum: ["user", "admin", "support"],
		nullable: false
	})
	@ApiModelProperty({
		example: "user",
		description: "User type"
	})
	@IsEnum(["user", "admin", "support"])
	public userType: UserType;
}
