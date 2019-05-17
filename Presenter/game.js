////////////////////
// Game Component //
////////////////////
const game = Vue.component('game', {
  	template: gameHTML,

  	data() {
    	return data
  	},

  	methods: {
    	startGame() {
      		var dataOut = {
        		senderId: this.clientId,
        		data: null,
        		recipientId: null,
        		gameId: this.gameState.gameId,
        		command: 'StartGame',
      		};
      		this.serverProxy.commandHandler(JSON.stringify(dataOut));
    	},
  	},

 	watch: {
    	'gameState.status': function() {
      		this.message = "Game started! Woohoo!";
    	},
  	},

   mounted() {
    	if (this.gameState.gameId == null) {
       		this.$router.push({name: 'gamelist'});
    	}
  	},

});
