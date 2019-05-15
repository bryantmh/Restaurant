////////////////////////
// GameList Component //
////////////////////////
const gamelist = Vue.component('gamelist', {
  template: gamelistHTML,

  data() {
    return data
  },

  methods: {
  	incrementPlayers(game) {
            this.game.numberOfPlayers++;
    },
    createGame(gamename, clientid) {
      // data: name of game
      // gameid
      var dataOut = {
        senderid: clientid,
        command: 'CreateGame', // This should be login on real thing
        data: {'name': gamename},
        gameid: null,
        recipientid: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    joinGame(gameId, clientid) {
    	// data: name of game, 
      // gameid
      var dataOut = {
        senderid: clientid,
        command: 'JoinGame', // This should be login on real thing
        data: {'gameid': gameId},
        gameid: null,
        recipientid: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    }
  },
});
