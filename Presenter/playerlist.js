////////////////////
// Playerlist Component //
////////////////////
const playerlist = Vue.component('playerlist', {
    template: playerlistHTML,

    data() {
      return data
    },

    methods: {
        getColor(player) {
            return "color:" + player.color;
        },

        cardsLeft(playerID) {
            var counter = 0;
            for (var cardTypes in this.gameState.players[playerID].cardBank) {
                if (cardTypes != 'destinationCards') {
                    counter += this.gameState.players[playerID].cardBank[cardTypes].length;
                }
            }
            return counter;
        }
    },

});