import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { ROLE_KEY } from 'src/decorators/roles.decorator'
import { Role } from 'src/enums/role.enum'
import { AccessControlService } from 'src/shared/access-contol.service'

export class TokenDto {
	id: number
	role: Role
}

@Injectable()
export class RoleGuard {
	constructor(
		private reflector: Reflector,
		private accessControlService: AccessControlService
	) {}

	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
			context.getHandler(),
			context.getClass()
		])

		const request = context.switchToHttp().getRequest()
		const token = request['token'] as TokenDto

		console.log(token)

		for (let role of requiredRoles) {
			const result = this.accessControlService.isAuthorized({
				currentRole: token.role,
				requiredRole: role
			})

			if (result) true
		}

		return false
	}
}
