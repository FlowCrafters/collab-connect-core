import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { InstanceStatus } from '@/common/databases/instance-statuses'

@Injectable()
class InstanceService {
	constructor(private readonly prismaService: PrismaService) {}

	getInstanceStatus(): InstanceStatus {
		return InstanceStatus.Ready
	}
}

export { InstanceService }
