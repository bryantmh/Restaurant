class Command {

	/**
	* @param command - The incoming command message
	* @pre command is an object
	* @pre The command member of command is the name of a function within this class and not null
	* @post Return value is null, or another command in string form
	*/
	execute(command) {
		data.message = null;
		return eval("this." + command.command)(command);
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with members reipientId, and data
	* @pre params.data contains the members authToken, and clientId, and these are not null
	* @post Return value is another command with members senderId with a value equal to params.data.clientId, and command with a value of 'GetGameList' in JSON string form
	* @post data.clientId equals params.recipientId
	* @post data.authToken equals params.data.authToken
	*/
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

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with members reipientId, and data
	* @pre params.data contains the members authToken, and clientId, and these are not null
	* @post Return value is another command with members senderId with a value equal to params.data.clientId, and command with a value of 'GetGameList' in JSON string form
	* @post data.clientId equals params.recipientId
	* @post data.authToken equals params.data.authToken
	*/
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

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member games, and this is not null
	* @post data.games equals params.data.games
	*/
	GameListSuccess(params)  {
		var retVal = JSON.parse(params.data);
		data.games = retVal.games;
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member game, and this is not null
	* @post data.games equals data.games + params.data.game
	* @post data.gameState equals params.data.game
	*/
	CreateGameSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.games.push(retVal.game);
		data.gameState = retVal.game;
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member game, and this is not null
	* @post data.games equals data.games + params.data.game
	*/
	GameCreated(params) {
		var retVal = JSON.parse(params.data);
		data.games.push(retVal.game);
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member game, and this is not null
	* @post data.gameState equals params.data.game
	*/
	JoinGameSuccess(params) {
		var retVal = JSON.parse(params.data);
		data.gameState = retVal.game;
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member gameState, and this is not null
	* @post data.gameState equals params.data.gameState
	*/
	StartGameSuccess (params) {
		var retVal = JSON.parse(params.data);
		data.gameState = JSON.parse(retVal.gameState);
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member player, and this is not null
	* @pre params.data.player has at list the members playerId, and gameId, and these are not null
	* @post data.gameState has params.data.player added to it with key params.data.player.playerId
	* @post data.games of params.data.player['gameId'] has params.data.player added to it with key params.data.player.playerId
	*/
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

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member playerId, and this is not null, and cardToDiscard, and this is not null
	* @post data.gameState.cardBank.faceDownDestinationCards equals itself +  params.data.cardToDiscard
	* @post params.data.cardToDiscard has been removed from the player's card bank in data
	*/
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

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @post data.chat equals data.chat + params.data
	*/
	ChatResponse(params) {
		var retVal = JSON.parse(params.data);
		data.chat.push(retVal);
	}

	/**
	* @param params - An incoming command
	* @pre params is an object in JSON string form with at least the member data, and this is not null
	* @pre params.data has at least the member message, and this is not null
	* @post data.message equals params.data.message
	*/
	Error(params) {
		var retVal = JSON.parse(params.data)
		data.message = retVal.message
	}

}
