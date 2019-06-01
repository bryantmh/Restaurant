class ServerProxy {

	constructor(address) {
		this.socket = new WebSocket(address);
		this.command = new Command();
	}

	socketRun() {
	    this.socket.onmessage = (event) => {
			var message = JSON.parse(event.data);
	        var newMessage = this.command.execute(message);
	        if (newMessage !== undefined) {
	        	this.commandHandler(newMessage);
	        }
	    }
	}

	commandHandler(data) {
	  	this.socket.send(data);
	}

 }
