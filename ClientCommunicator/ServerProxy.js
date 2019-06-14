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
		this.socket.onclose = (event) => {
			console.log("Socket is closed. Reconnecting...");
			setTimeout(function(){
				console.log('Attempting to reconnect...');
				this.socket = new WebSocket('ws://jaredhammon.com:8080/ticket-to-ride-back-end/');
				console.log('Reconnect successful!');
			}, 5000);
			if(this.socket.readyState == 1){
				this.socketRun();
				var messageData = JSON.stringify({'authToken': data.authToken});
				var message = new Message('Reconnect', messageData, data.clientId, data.gameState.gameId).toString();
				this.commandHandler(message);
			}
		}

		this.socket.onerror = function(error){
			console.error("Socket encountered error: ", error.message, "Closing socket");
			this.socket.close();
		}
	}

	commandHandler(data) {
	  	this.socket.send(data);
	}

 }
