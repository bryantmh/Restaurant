////////////////////
// Bank Component //
////////////////////
const bank = Vue.component('bank', {
  	template: bankHTML,

  	data() {
    	return data
  	},

  	methods: {
    	drawTrainCardFromDeck() {
            var message = new Message('DrawTrainCardFromDeck', null, this.clientId, this.gameState.gameId).toString();
          	this.serverProxy.commandHandler(message);
    	},

        drawTrainCardFromFaceup(index) {
            console.log("drawing train card " + index);
            var messageData = JSON.stringify({'cardDrawnIndex': index});
            var message = new Message('DrawTrainCardFromFaceUp', messageData, this.clientId, this.gameState.gameId).toString();
            this.serverProxy.commandHandler(message);
        },

        drawDestinationCards() {
            var message = new Message('DrawDestinationCards', null, this.clientId, this.gameState.gameId).toString()
            this.serverProxy.commandHandler(message);
        },
  	},

});
