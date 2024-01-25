import { Injectable } from '@nestjs/common'
import { Role } from 'src/enums/role.enum'

@Injectable()
export class AccessControlService {
	private roleHierarchy: Map<Role, number> = new Map()
	private priority: number = 1

	constructor() {
		this.buildRoleHierarchy([Role.USER, Role.ADMIN])
	}

	private buildRoleHierarchy(roles: Role[]) {
		roles.forEach(role => {
			this.roleHierarchy.set(role, this.priority)
			this.priority++
		})
	}

	public isAuthorized({ currentRole, requiredRole }: IsAuthorizedParams) {
		const currentPriority = this.roleHierarchy.get(currentRole)
		const requiredPriority = this.roleHierarchy.get(requiredRole)

<<<<<<< HEAD
		console.log(currentPriority, requiredPriority)

=======
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
		return (
			currentPriority && requiredPriority && currentPriority >= requiredPriority
		)
	}
}

interface IsAuthorizedParams {
	currentRole: Role
	requiredRole: Role
}
