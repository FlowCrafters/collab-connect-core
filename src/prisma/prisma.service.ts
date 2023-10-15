import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
class PrismaService extends PrismaClient {
	async reconnect() {
		await this.$disconnect()
		await this.$connect()
	}
}

export { PrismaService }
