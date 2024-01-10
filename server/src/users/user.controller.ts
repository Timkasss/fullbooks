import {
	Body,
	Controller,
	Delete,
	HttpCode,
	HttpStatus,
	Param,
	Patch
} from '@nestjs/common'
import { UsersService } from './users.service'
import { updateUserDto } from './dto/update-user.dto'
import {
	ApiBody,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger'
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data'

@ApiTags('users')
@Controller('users')
export class UserController {
	constructor(private readonly usersService: UsersService) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({
		description: 'Update a user',
		summary: 'Update user details by ID'
	})
	@ApiParam({
		name: 'id',
		description: 'User ID',
		required: true
	})
	@ApiBody({
		description: 'Updated user data',
		type: updateUserDto
	})
	@ApiResponse({
		status: 200,
		description: 'User updated successfully'
	})
	@ApiResponse({
		status: 400,
		description: 'Bad Request'
	})
	@ApiResponse({
		status: 404,
		description: 'User not found'
	})
	@ApiResponse({
		status: 500,
		description: 'Internal Server Error'
	})
	@FormDataRequest({ storage: MemoryStoredFile })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
		return this.usersService.update(id, updateUserDto)
	}

	@ApiOperation({
		description: 'Delete a user',
		summary: 'Delete a user from the database by ID'
	})
	@ApiParam({
		name: 'id',
		description: 'User ID',
		required: true
	})
	@ApiResponse({
		status: 200,
		description: 'User deleted successfully'
	})
	@ApiResponse({
		status: 404,
		description: 'User not found'
	})
	@ApiResponse({
		status: 500,
		description: 'Internal Server Error'
	})
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.usersService.remove(id)
	}
}
