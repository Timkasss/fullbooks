import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UsersService } from 'src/users/users.service'
import { UserDocument } from 'src/schemas/user.schema'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		private jwtService: JwtService,
		private usersService: UsersService
	) {}

	async signIn(email: string, pass: string): Promise<{ access_token: string }> {
		const user: UserDocument | null = await this.userModel.findOne({ email })

		if (!user) {
			throw new NotFoundException()
		}

		const match: boolean = await bcrypt.compare(pass, user.password)
		if (!match) {
			throw new NotFoundException()
		}

		const payload: { [key: string]: any } = this.createJwtPayload(user)
		return {
			access_token: await this.jwtService.signAsync(payload)
		}
	}

	async signUp(
		CreateUserDto: CreateUserDto
	): Promise<{ access_token: string }> {
		const user = new this.userModel(CreateUserDto)
		const salt = await bcrypt.genSalt(10)
		const hashPassword = await bcrypt.hash(user.password, salt)

		user.password = hashPassword
		await user.save()

		const payload = {
			id: user._id,
			username: user.username,
			email: user.email,
			role: user.role
		}
		return {
			access_token: await this.jwtService.signAsync(payload)
		}
	}

	async validateUser(
		email: string,
		pass: string
	): Promise<{ [key: string]: any } | null> {
		const user: UserDocument | null = await this.usersService.findByEmail(email)

		if (!user) {
			throw new NotFoundException()
		}

		const { password, ...result } = user
		const match: boolean = await bcrypt.compare(pass, password)

		if (match) {
			return result
		}

		return null
	}

	private async hashPassword(password: string): Promise<string> {
		const salt: string = await bcrypt.genSalt(10)
		return bcrypt.hash(password, salt)
	}

	private createJwtPayload(user: UserDocument): { [key: string]: any } {
		return {
			id: user._id,
			username: user.username,
			email: user.email,
			role: user.role
		}
	}
}
