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
        //playerId: this.playerId,
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
       // playerId: this.playerId,
        command: 'JoinGame',
        data: JSON.stringify({'gameId': gameId}),
        gameId: gameId,
        recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    getNumberOfPlayersInGame(game) {
      var i;
      for (i in game.playerList) { }
      return i;
    }
  },

  watch: {
    gameState: function() {
     this.$router.push({name: 'game'});
    },
    message: function() {
      $( "#errorMessage" ).text(this.message);
      $( "#errorMessage" ).css( "display", "block" );
    }
  },
  mounted() {
    if (this.authToken == null) {
       this.$router.push({name: 'login'});
    }
  },
});
