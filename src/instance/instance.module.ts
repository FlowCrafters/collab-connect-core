import { Module } from '@nestjs/common'
import { InstanceService } from './instance.service'
import { InstanceResolver } from './instance.resolver'
import { PrismaService } from '@/prisma/prisma.service'

@Module({
	providers: [InstanceService, InstanceResolver, PrismaService],
})
class InstanceModule {}

export { InstanceModule }
