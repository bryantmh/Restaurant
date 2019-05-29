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
      var dataOut = {
        senderId: data.clientId,
        data: JSON.stringify({
          ChatMessage: {
            playerScreenName: this.gameState.players[this.clientId].screenName,
            message: myMessage,
          }
        }),
        recipientId: null,
        gameId: this.gameState.gameId,
        command: 'NewChatMessage',
      };

      // console.log(dataOut)
      this.serverProxy.commandHandler(JSON.stringify(dataOut));
    }
  },
});