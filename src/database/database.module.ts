import { DynamicModule, Module } from "@nestjs/common";
import { postgresConfiguration } from "./database.options";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({})
export class DatabaseModule {
	public static async forRoot(): Promise<DynamicModule> {
		return {
			module: DatabaseModule,
			imports: [TypeOrmModule.forRoot(await postgresConfiguration())]
		};
	}
}
