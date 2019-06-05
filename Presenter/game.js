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
            var message = new Message('StartGame', null, this.clientId, this.gameState.gameId).toString();
            this.serverProxy.commandHandler(message);
        },
    },

    watch: {
        'gameState.status': function() {
            this.message = "Game started! Woohoo!";
        },
    },

    mounted() {
        if (this.gameState == null || this.gameState.gameId == null) {
            this.$router.push({name: 'gamelist'});
        }
    },

});
