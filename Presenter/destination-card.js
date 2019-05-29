////////////////////
// DestinationCard Modal Component //
////////////////////
const destinationCard = Vue.component('destinationCard', {
    template: destinationCardHTML,

    data() {
        return data;
    },

    methods: {

        selectCard(card) {
            card.selected ? (card.selected = false): (card.selected = true);  
        },

        discardCards(cards) {
            var dataOut = {
                senderId: this.clientId,
                data: cards,
                gameId: this.gameState.gameId,
                command: '', // Not Yet Implemented
              };
              this.serverProxy.commandHandler(JSON.stringify(dataOut));
        }
    },

   watch: {
      
    },
    
    mounted() {

    },

});