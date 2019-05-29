class ServerProxy {

	constructor(address) {
		this.socket = new WebSocket(address);
		this.command = new Command();
	}

	socketRun() {
	    this.socket.onmessage = (event) => {
			var commandIn = JSON.parse(event.data);
	        var newCommand = this.command.execute(commandIn);
	        if (newCommand !== undefined) {
	        	this.commandHandler(newCommand);
	        }
	    }
	}

	commandHandler(data) {
	  	this.socket.send(data);
	}

 }
