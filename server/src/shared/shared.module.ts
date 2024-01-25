import { Module } from '@nestjs/common'
import { AccessControlService } from './access-contol.service'

@Module({
	imports: [],
	controllers: [],
	providers: [AccessControlService]
})
export class SharedModule {}
