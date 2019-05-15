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
        command: 'CreateGame',
        data: JSON.stringify({'name': gamename}),
        gameId: null,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    joinGame(gameId) {
      var dataOut = {
        senderId: this.clientId,
        command: 'JoinGame',
        data: JSON.stringify({'gameId': gameId}),
        gameId: null,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    }
  },

  watch: {
    gameState: function() {
      this.$router.push({name: 'game'});
    }

  },
});
