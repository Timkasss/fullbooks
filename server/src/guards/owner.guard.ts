import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { Role } from 'src/enums/role.enum'

@Injectable()
export class OwnerGuard implements CanActivate {
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest()
		const requestingUserId = request['token'].id
		const role = request['token'].role
		const targetUserId = request.params.id

		if (role === Role.ADMIN) {
			return true
		}

		return requestingUserId == targetUserId
	}
}
