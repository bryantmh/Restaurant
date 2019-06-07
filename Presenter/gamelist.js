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
            var messageData = JSON.stringify({'name': gamename});
            var message = new Message('CreateGame', messageData, this.clientId, null).toString();
            this.serverProxy.commandHandler(message);
        },

        joinGame(gameId) {
            var messageData = JSON.stringify({'gameId': gameId, 'screenName': inputName});
            var message = new Message('JoinGame', messageData, this.clientId, gameId).toString();
            this.serverProxy.commandHandler(message);
        },
    },

    watch: {
        gameState: function() {
            this.$router.push({name: 'game'});
        },
    },

    mounted() {
        if (this.authToken == null) {
            this.$router.push({name: 'login'});
        }
    },

});
