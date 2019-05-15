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
        gameId: this.gameId,
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
      alert('game started!');
    }

  },
});
