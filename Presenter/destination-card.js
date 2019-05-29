/////////////////////////////////////
// DestinationCard Modal Component //
/////////////////////////////////////

const destinationCardData = {
    selected: []
};



const destinationCard = Vue.component('destinationCard', {
    template: destinationCardHTML,

    data() {
        return destinationCardData;
    },

    methods: {

        selectCard(card) {
            // Make it so only 1 can be selected
            if (this.selected.length < 1) {
                this.selected.push(card);
                $('#card' + card['id']).addClass('disabled');
            }
            else {
                $('#card' + this.selected[0].id).removeClass('disabled');
                this.selected = [];
                this.selected.push(card);
                $('#card' + card['id']).addClass('disabled');
            }
        },

        discardCards() {
            var dataOut = {
                senderId: data.clientId,
                data: this.selected,
                gameId: data.gameState.gameId,
                command: 'DiscardCards',
            };
            data.serverProxy.commandHandler(JSON.stringify(dataOut));
            $('#discardGameBeginning').hide();
        }
    },

});