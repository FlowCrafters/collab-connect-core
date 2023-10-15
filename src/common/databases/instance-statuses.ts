enum InstanceStatus {
	Loading = 'loading',
	WaitingForDatabase = 'waitingForDatabase',
	ConnectToDatabase = 'connectToDatabase',
	InvalidDatabaseConnection = 'invalidDatabaseConnection',
	AwaitAdminCreated = 'awaitAdminCreated',
	Ready = 'ready',
}

export { InstanceStatus }
