import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { ROLE_KEY } from 'src/decorators/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { AccessControlService } from 'src/shared/access-contol.service'
import { JwtService } from '@nestjs/jwt'

export class TokenDto {
	id: number
	role: Role
}

@Injectable()
export class RoleGuard {
	constructor(
		private reflector: Reflector,
		private accessControlService: AccessControlService,
		private jwtService: JwtService
	) {}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
			context.getHandler(),
			context.getClass()
		])

		const request = context.switchToHttp().getRequest()
		const token = request.headers['authorization'].split(' ')[1]

		const decodedToken = this.jwtService.decode(token)

		for (const role of requiredRoles) {
			const result = this.accessControlService.isAuthorized({
				currentRole: decodedToken.role,
				requiredRole: role
			})

			if (result) {
				return true
			}
		}

		return false
	}
}
