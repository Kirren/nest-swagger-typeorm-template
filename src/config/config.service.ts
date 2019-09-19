import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import dotenvExp from "dotenv-expand";
import * as fs from "fs";
import { defaults } from "../defaults";

@Injectable()
export class ConfigService {
	private readonly _envConfig: { [key: string]: string };

	constructor() {
		try {
			this._envConfig = dotenvExp({ parsed: dotenv.parse(fs.readFileSync(`.env`)) }).parsed;
		} catch (e) {
			this._envConfig = process.env;
		}
	}

	public get(key: string): string {
		return this._envConfig[key];
	}

	public read(): any {
		const values = { ...this._envConfig };

		Object.keys(defaults).map((key) => {
			if (key && !values[key] && defaults[key]) {
				values[key] = defaults[key];
			}
		});

		return values;
	}

	public env(): string {
		return process.env.NODE_ENV || "dev";
	}
}
