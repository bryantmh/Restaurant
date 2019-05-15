////////////////////////
// GameList Component //
////////////////////////

const gamelist = Vue.component('gamelist', {
  template: gamelistHTML,

  data() {
    return data
  },

  methods: {
    createGame(gamename) {
      var dataOut = {
        senderId: this.clientId,
        command: 'CreateGame', // This should be login on real thing
        data: {'name': gamename},
        gameId: null,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    joinGame(gameId) {
      var dataOut = {
        senderId: this.clientId,
        command: 'JoinGame', // This should be login on real thing
        data: {'gameId': gameId},
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
