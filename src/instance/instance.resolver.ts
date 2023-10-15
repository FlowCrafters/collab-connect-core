import { Query, registerEnumType, Resolver } from '@nestjs/graphql'

import { InstanceService } from './instance.service'
import { InstanceStatus } from '@/common/databases/instance-statuses'

@Resolver()
class InstanceResolver {
	constructor(private readonly instanceService: InstanceService) {
		registerEnumType(InstanceStatus, { name: 'InstanceStatus' })
	}

	@Query(() => InstanceStatus, { name: 'instanceStatus' })
	getInstanceStatus(): InstanceStatus {
		return this.instanceService.getInstanceStatus()
	}
}

export { InstanceResolver }
