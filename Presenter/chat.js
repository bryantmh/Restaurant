////////////////////
// Chat Component //
////////////////////
const chat = Vue.component('chat', {
    template: chatHTML,

    data() {
        return data;
    },

    methods: {
        sendMessage(myMessage) {
            var messageData = JSON.stringify({
                'playerScreenName': this.gameState.players[this.clientId].screenName,
                'message': myMessage,
            });
            var message = new Message('NewChatMessage', messageData, this.clientId, this.gameState.gameId).toString();
            this.serverProxy.commandHandler(message);
        },
    },

});