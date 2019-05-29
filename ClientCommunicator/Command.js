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
                app.$set(data.games[i].players, retVal['player']['playerId'], retVal['player']);
            }
        }
        if (data.gameState.gameId == gameid) {
            app.$set(data.gameState.players, retVal['player']['playerId'], retVal['player']);
        }
                            
	}

	DiscardDestinationCardSuccess(params) {
		var retVal = JSON.parse(params.data);
		var playerId = retVal.playerId;
		var card = retVal.cardToDiscard;
		for (var i = 0; i < data.gameState.players[playerId].cardBank.destinationCards.length; i++) {
			if (data.gameState.players[playerId].cardBank.destinationCards[i].id == card.id) {
				data.gameState.players[playerId].cardBank.destinationCards.splice(i, 1);
			}
		}
		data.gameState.cardBank.faceDownDestinationCards.push(card);
	}

	Error(params) {
		var retVal = JSON.parse(params.data)
		data.message = retVal.message
	}

}
