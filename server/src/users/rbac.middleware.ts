import { ForbiddenException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class RbacMiddleware {
	constructor(private readonly jwtService: JwtService) {}

	use(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization?.split(' ')[1]
			if (!token) throw new ForbiddenException()

			const decodedToken = this.jwtService.verify(token)
			const role = decodedToken.username
			console.log(role)
			// if (role !== 'admin') throw new ForbiddenException()

			next()
		} catch (error) {
			res.status(error.status).json({
				statusCode: error.status,
				message: error.response.message
			})
		}
	}
}
