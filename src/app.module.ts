import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { cwd } from 'process'
import { InstanceModule } from './instance/instance.module'
import { PrismaModule } from './prisma/prisma.module'
import { EventEmitterModule } from '@nestjs/event-emitter'
@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(cwd(), 'graphql/schema.graphql'),
		}),
		EventEmitterModule.forRoot(),
		InstanceModule,
		PrismaModule,
	],
	controllers: [],
	providers: [AppService, PrismaService],
})
class AppModule {}

export { AppModule }
