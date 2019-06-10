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
		var discardedCards = message.discardedCards;
		var rainbowCards = message.rainbowCards;
		var cardColor = message.cardColor;
		var owner = message.owner;
		var ownerid = message.ownerId;
		var item = app.$children[0].$children[1].comproutes[itemid];
		var color = data.gameState.players[ownerid].color;
		data.gameState.players[ownerid].score += message.points;
		data.gameState.players[ownerid].trainCarsRemaining -= item.length;
		item.owner = owner;
		item.path.setOptions({
		  strokeColor: color,
		  strokeWeight: 8,
		});
		for(var x = 0; x < discardedCards.length; x++){
			for (var i = 0; i < data.gameState.players[ownerid].cardBank[cardColor + "Cards"].length; i++) {
				if(data.gameState.players[ownerid].cardBank[cardColor + "Cards"][i].id == x.id){
					data.gameState.players[ownerid].cardBank[cardColor + "Cards"].splice(i, 1);
					continue;
				}
			}
		}
		
		for(var x = 0; x < rainbowCards.length; x++){
			for(var i = 0; i < data.gameState.players[ownerid].cardBank["rainbowCards"].length; i++){
				if(data.gameState.players[ownerid].cardBank["rainbowCards"][i].id == x.id){
					data.gameState.players[ownerid].cardBank["rainbowCards"].splice(i, 1);
					continue;
				}			
			}
		}
		
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
        if (data.gameState != null && data.gameState.gameId == gameid) {
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
		console.log(message.stackTrace);
		data.message = message.message
	}

	TurnChange(message) {
		data.gameState.currentPlayer = message.currentPlayer;
	}

	LastRound(message) {
		alert("This is the final round! Choose your move wisely");
	}

	EndGame(message) {
		alert("The game is over!\n");
		var pointBreakdown = message.pointBreakdown;

		var endGameData = [];
		for (var player in pointBreakdown) {
			endGameData.push({
				playerScreenName: player,
				routePoints: pointBreakdown[player][0],
            	destinationCardPoints: pointBreakdown[player][1],
            	destinationCardPointsLost: pointBreakdown[player][2],
            	mostRoutesPoints: pointBreakdown[player][3]
			})
		}

		data.gameState.push(endGameData);
		$('#viewEndGameModal').show();
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
		var senderId = message.senderId;
		data.newDestinationCards = [];
		console.log('before');
		console.log(data.gameState.cardBank.faceDownDestinationCards.length);
		
		if (playerId == senderId) {
			for (var card in cards) {
				if( cards[card] != null){
					var cardIndex = data.gameState.cardBank.faceDownDestinationCards.indexOf(cards[card].id);
					data.gameState.cardBank.faceDownDestinationCards.splice(cardIndex, 1);
					data.newDestinationCards.push(cards[card]);
				}
			}
			$('#discardGameBeginning').show();
		}
		else {
			for (var card in cards) {
				if( cards[card] != null){
					var cardIndex = data.gameState.cardBank.faceDownDestinationCards.indexOf(cards[card].id);
					data.gameState.cardBank.faceDownDestinationCards.splice(cardIndex, 1);
					data.gameState.players[senderId].cardBank.destinationCards.push(cards[card]);
				}
			}
		}
		console.log(data.gameState.cardBank.faceDownDestinationCards.length);
	}

	PlayerLeftGame(message) {
		alert(data.gameState.players[message.playerId].screenName + " has left the game!");
	}

	ResetFaceUpCards(message) {
		app.$set(data.gameState.cardBank, 'faceDownTrainCards', message.faceDown);
		app.$set(data.gameState.cardBank, 'faceUpTrainCards', message.faceUp)
	}

	UpdateFaceDownCards(message) {
		app.$set(data.gameState.cardBank, 'faceDownTrainCards', message.faceDown);
	}

}
