import { IsNotEmpty, IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "./baseResponse.dto";

export class ErrorResponseDto extends BaseResponseDto {
	@ApiModelProperty({
		example: "An error occurred",
		description: "Error response message"
	})
	@IsString()
	@IsNotEmpty()
	public message: string;
}
