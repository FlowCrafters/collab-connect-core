import { Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

@Module({})
class PrismaModule {
	exports: [PrismaService]
}

export { PrismaModule }
export default PrismaModule
