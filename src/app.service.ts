import { Injectable } from '@nestjs/common'
import { resolve } from 'path'
import { cwd } from 'process'
import { existsSync, mkdirSync } from 'fs'

@Injectable()
class AppService {
	private initDirs() {
		const runtimeDir = resolve(cwd(), 'runtime')

		if (!existsSync(runtimeDir)) mkdirSync(runtimeDir)
	}

	constructor() {
		this.initDirs()
	}
}

export { AppService }
