import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { ErrorResponseDto } from "../dto/errorResponse.dto";
import { SuccessResponseDto } from "../dto/successResponse.dto";
import { UserRequestDto } from "../dto/userRequest.dto";
import { UserService } from "./user.service";

@Controller("user")
@ApiUseTags("user")
@ApiResponse({
	status: HttpStatus.BAD_REQUEST, // 400
	type: ErrorResponseDto,
	description: "Wrong data."
})
@ApiResponse({
	status: HttpStatus.FORBIDDEN, // 403
	type: ErrorResponseDto,
	description: "Unauthorised request."
})
@ApiResponse({
	status: HttpStatus.INTERNAL_SERVER_ERROR, // 500
	type: ErrorResponseDto,
	description: "Server Error."
})
export class UserController {
	constructor(protected readonly _userService: UserService) {
	}

	@Post("/")
	@ApiOperation({ title: "Save user requesting access to database." })
	@ApiResponse({
		status: HttpStatus.OK,
		type: SuccessResponseDto,
		description: "The user has been successfully saved."
	})
	@HttpCode(HttpStatus.OK) // 200
	public async add(@Body() request: UserRequestDto): Promise<SuccessResponseDto> {
		await this._userService.saveUser(request);

		return {
			code: HttpStatus.OK,
			message: "Saved successfully"
		};
	}
}
