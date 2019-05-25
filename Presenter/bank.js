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
      		var dataOut = {
        		senderId: this.clientId,
        		data: null,
        		recipientId: null,
        		gameId: this.gameState.gameId,
        		command: 'DrawTrainCardFromDeck',
      		};
      		this.serverProxy.commandHandler(JSON.stringify(dataOut));
    	},
      drawTrainCardFromFaceup(index) {
          var dataOut = {
            senderId: this.clientId,
            data: null,
            recipientId: null,
            gameId: this.gameState.gameId,
            command: '', // Not Yet Implemented
          };
          this.serverProxy.commandHandler(JSON.stringify(dataOut));
      },
      drawDestinationCards() {
          var dataOut = {
            senderId: this.clientId,
            data: null,
            recipientId: null,
            gameId: this.gameState.gameId,
            command: 'DrawDestinationCards',
          };
          this.serverProxy.commandHandler(JSON.stringify(dataOut));
      },
  	},

 	watch: {
    	
  	},

  mounted() {

  },

});
