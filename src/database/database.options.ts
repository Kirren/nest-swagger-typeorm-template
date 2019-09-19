import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { getConnectionOptions } from "typeorm";
import { UserEntity } from "../user/user.entity";

export const postgresConfiguration = async (): Promise<TypeOrmModuleOptions> => {
	const defaultConnectionOptions = await getConnectionOptions();
	const customConnectionOptions = {
		type: "postgres",
		entities: [UserEntity]
	};

	return Object.assign(defaultConnectionOptions, customConnectionOptions);
};
