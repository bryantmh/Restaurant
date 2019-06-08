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
            var messageData = JSON.stringify({'name': gamename, 'screenName': this.inputName});
            var message = new Message('CreateGame', messageData, this.clientId, null).toString();
            this.serverProxy.commandHandler(message);
        },

        joinGame(gameId) {
            var willSend = true;
            for (var game in this.games) {
                if (this.games[game].gameId == gameId) {
                    for (var user in this.games[game].players) {
                        if (this.games[game].players[user].screenName == this.inputName) {
                            willSend = false;
                            break;
                        }
                    }
                    break;
                }
            }
            console.log(willSend);
            if (willSend) {
                var messageData = JSON.stringify({'gameId': gameId, 'screenName': this.inputName});
                var message = new Message('JoinGame', messageData, this.clientId, gameId).toString();
                this.serverProxy.commandHandler(message);
            }
            else {
                this.message = "Your name has already been taken. Please select another";
            }
          
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
