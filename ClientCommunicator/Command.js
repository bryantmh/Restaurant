class Command {

	execute(command) {
		data.message = null;
		return eval("this." + command.command)(command);
	}

	RegisterSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.clientId = params.recipientId;
		data.authToken = retVal.authToken;
        var dataOut = {
            senderId: retVal.clientId,
            command: 'GetGameList',
            data: null,
            gameId: null,
            recipientId: null
        };
		return JSON.stringify(dataOut);
	}

	LoginSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.clientId = params.recipientId;
		data.authToken = retVal.authToken;
        var dataOut = {
            senderId: retVal.clientId,
            command: 'GetGameList',
            data: null,
            gameId: null,
            recipientId: null
        };
		return JSON.stringify(dataOut);
	}

	GameListSuccess(params)  {
		var retVal = JSON.parse(params.data);
		data.games = retVal.games;
	}

	CreateGameSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.games.push(retVal.game);
		data.gameState = retVal.game;
	}

	GameCreated(params) {
		var retVal = JSON.parse(params.data);
		data.games.push(retVal.game);
	}

	JoinGameSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.gameState = retVal.game;
	}

	StartGameSuccess (params) {
		var retVal = JSON.parse(params.data);
		data.gameState = JSON.parse(retVal.gameState);
	}

	PlayerJoinedGame(params)  {
		var retVal = JSON.parse(params.data);
        var gameid = retVal['player']['gameId'];

        for (var i = 0; i < data.games.length; i++) {
            if (data.games[i].gameId == gameid) {
                app.$set(data.games[i].playerList, retVal['player']['playerId'], retVal['player']);
            }
        }
        if (data.gameState.gameId == gameid) {
            app.$set(data.gameState.playerList, retVal['player']['playerId'], retVal['player']);
        }
                            
	}

	DrawDestinationCardsResponse(params) {

	}


	ChatResponse(params) {
		var retVal = JSON.parse(params.data); // ChatMessage (screenName, message)
		console.log("Chat response!");
		console.log(retVal);
		data.gameState.chat.push(retVal);
	}

	Error(params) {
		var retVal = JSON.parse(params.data)
		data.message = retVal.ChatMessage.message
	}

}
