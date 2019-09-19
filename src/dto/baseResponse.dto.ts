import { IsInt, Max, IsNotEmpty, Min } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class BaseResponseDto {
	@ApiModelProperty({
		example: 200,
		description: "Response http code"
	})
	@IsInt()
	@Min(200)
	@Max(600)
	@IsNotEmpty()
	public code: number;
}
