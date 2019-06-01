class Message {
	
	constructor(command, data = null, clientId = null, gameId = null,) {
		this.command = command;
		this.senderId = clientId;
		this.gameId = gameId;
		this.recipientId = null;
		this.data = data;
	}

	toString() {
		return JSON.stringify(this);
	}
}