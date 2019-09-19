import { IsNotEmpty, IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { BaseResponseDto } from "./baseResponse.dto";

export class SuccessResponseDto extends BaseResponseDto {
	@ApiModelProperty({
		example: "All ok",
		description: "Success response message"
	})
	@IsString()
	@IsNotEmpty()
	public message: string;
}
