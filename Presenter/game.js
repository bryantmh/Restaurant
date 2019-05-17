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
        command: 'StartGame', // This should be login on real thing
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    addUser(user) {
        this.users.push(user);
    } 
  },
  watch: {
    'gameState.status': function() {
      $( "#errorMessage" ).text("Game started! Woohoo!");
      $( "#errorMessage" ).css( "display", "block" );
      alert('game started!');
    },
    message: function() {
      $( "#errorMessage" ).text(this.message);
      $( "#errorMessage" ).css( "display", "block" );
    },
  },
   mounted() {
    if (this.gameState.gameId == null) {
       this.$router.push({name: 'gamelist'});
    }
  },
});
