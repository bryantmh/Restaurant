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
    createGame() {
      // data: name of game
      // gameid
    },
    joinGame() {
    	// data: name of game, 
      // gameid
    }
  },
});
