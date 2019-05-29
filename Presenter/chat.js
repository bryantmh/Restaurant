////////////////////
// Chat Component //
////////////////////

const chatData = {
  chatMessage: "",
};

const chat = Vue.component('chat', {
  template: chatHTML,

  data() {
    return chatData;
  },

  methods: {
    sendMessage(myMessage) {
      var dataOut = {
        senderId: data.clientId,
        data: {
          ChatMessage: {
            playerScreenName: data.gameState.playerList[data.clientId].screenName,
            message: myMessage,
          }
        },
        recipientId: null,
        gameId: data.gameState.gameId,
        command: 'NewChatMessage',
      };

      console.log(dataOut)
      this.serverProxy.commandHandler(JSON.stringify(dataOut));
    }
  },
});