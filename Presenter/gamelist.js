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
      var dataOut = {
        senderId: clientId,
        command: 'CreateGame', // This should be login on real thing
        data: {'name': gamename},
        gameId: null,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    joinGame(gameId, clientid) {
      var dataOut = {
        senderId: clientId,
        command: 'JoinGame', // This should be login on real thing
        data: {'gameid': gameId},
        gameId: null,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    }
  },

  watch: {
    gameState: function() {
      this.$router.push({name: 'gamelist'});
    }

  },
});
