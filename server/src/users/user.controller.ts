import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	NotFoundException,
	Param,
	Patch,
	Req,
	UseGuards
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
import { Roles } from 'src/decorators/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { AuthGuard } from 'src/guards/auth.guard'
import { RoleGuard } from 'src/guards/role.guard'
import { OwnerGuard } from 'src/guards/owner.guard'
import { Request } from 'express'

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
	@Roles(Role.ADMIN, Role.USER)
	@UseGuards(AuthGuard, RoleGuard, OwnerGuard)
	@FormDataRequest({ storage: MemoryStoredFile })
	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateUserDto: updateUserDto) {
		try {
			const updatedUser = await this.usersService.update(id, updateUserDto)
			return { success: true, data: updatedUser }
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw new NotFoundException({
					success: false,
					message: 'User not found'
				})
			} else if (error instanceof BadRequestException) {
				throw new BadRequestException({
					success: false,
					message: 'Bad request'
				})
			} else {
				console.error(error)
				throw new BadRequestException({
					success: false,
					message: 'Something went wrong'
				})
			}
		}
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

	@Get('profile')
	profile(@Req() req: Request) {
		return this.usersService.profile(req)
	}
}
