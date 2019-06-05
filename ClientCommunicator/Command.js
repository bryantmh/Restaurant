class Command {

	execute(message) {
		data.message = null;
		var commandMessage = JSON.parse(message.data);
		commandMessage.recipientId = message.recipientId;
		commandMessage.senderId = message.senderId;
		return eval("this." + message.command)(commandMessage);
	}

	RegisterSuccess(message) {
		data.clientId = message.recipientId;
		data.authToken = message.authToken;
      	return new Message('GetGameList', null, message.clientId).toString();
	}

	LoginSuccess(message) {
		data.clientId = message.recipientId;
		data.authToken = message.authToken;
		return new Message('GetGameList', null, message.clientId).toString();
	}

	ClaimRouteSuccess(message){
		var itemid = message.routeId.toString();
		var owner = message.owner;
		var ownerid = message.ownerId;
		var item = app.$children[0].$children[1].comproutes[itemid];
		var color = data.gameState.players[ownerid].color;
		item.owner = owner;
		item.path.setOptions({
		  strokeColor: color,
		});
		data.gameState.players[ownerid].score += item.length;
		item.waypointmarker.setLabel(owner);
	}

	GameListSuccess(message)  {
		data.games = message.games;
	}

	CreateGameSuccess(message) {
		data.games.push(message.game);
		data.gameState = message.game;
	}

	GameCreated(message) {
		data.games.push(message.game);
	}

	JoinGameSuccess(message) {
		data.gameState = message.game;
	}

	StartGameSuccess (message) {
		data.gameState = JSON.parse(message.gameState);
	}

	PlayerJoinedGame(message)  {
        var gameid = message['player']['gameId'];

        for (var i = 0; i < data.games.length; i++) {
            if (data.games[i].gameId == gameid) {
                app.$set(data.games[i].players, message['player']['playerId'], message['player']);
            }
        }
        if (data.gameState.gameId == gameid) {
            app.$set(data.gameState.players, message['player']['playerId'], message['player']);
        }
                            
	}

	// TODO: Bug where the counter is wrong
	DiscardDestinationCardSuccess(message) {
		var playerId = message.playerId;
		var cards = message.cardsToDiscard;
		for (var card in cards) {
			for (var i = 0; i < data.gameState.players[playerId].cardBank.destinationCards.length; i++) {
				if (data.gameState.players[playerId].cardBank.destinationCards[i].id == cards[card].id) {
					data.gameState.players[playerId].cardBank.destinationCards.splice(i, 1);
				}
			}
			data.gameState.cardBank.faceDownDestinationCards.push(cards[card]);
		}
	}

	ChatMessageSuccess(message) {
		data.chat.push(message);
	}

	Error(message) {
		data.message = message.message
	}

	TurnChange(message) {
		data.gameState.currentPlayer = message.currentPlayer;
	}

	LastRound(message) {
		alert("This is the final round! Choose your move wisely");
	}

	EndGame(message) {
		alert("The game is over!");
	}

	DrawTrainCardFromDeck(message) {
		var card = message.card;
		var playerId = message.playerId;

		var faceDownIndex = data.gameState.cardBank.faceDownTrainCards.indexOf(card.id);
		data.gameState.cardBank.faceDownTrainCards.splice(faceDownIndex, 1);

		data.gameState.players[playerId].cardBank[card.color + "Cards"].push(card.id);
	}


	DrawTrainCardFromFaceUp(message) {
		var newCard = message.newCard;
		var oldCard = message.oldCard;
		var playerId = message.playerId;

		var faceUpIndex = message.faceUpIndex;
		data.gameState.cardBank.faceUpTrainCards[faceUpIndex] = newCard.id;
		var faceDownIndex = data.gameState.cardBank.faceDownTrainCards.indexOf(newCard.id);
		data.gameState.cardBank.faceDownTrainCards.splice(faceDownIndex, 1);

		data.gameState.players[playerId].cardBank[oldCard.color + "Cards"].push(oldCard.id);
	}


	DrawDestinationCards(message) {
		var playerId = message.recipientId;
		var cards = message.destinationCards;

		for (var card in cards) {
			data.gameState.players[playerId].cardBank.destinationCards.push(cards[card]);
		}
		for (var card in cards) {
			data.gameState.cardBank.faceDownDestinationCards.splice(cards[card].id, 1);
		}
		if (playerId == message.senderId) {
			$('#discardGameBeginning').show();
		}
	}

}
