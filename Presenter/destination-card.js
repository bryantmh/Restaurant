/////////////////////////////////////
// DestinationCard Modal Component //
/////////////////////////////////////

const destinationCardData = {
    selected: null
};



const destinationCard = Vue.component('destinationCard', {
    template: destinationCardHTML,

    data() {
        return destinationCardData;
    },

    methods: {

        selectCard(card) {
            if (this.selected == null) {
                this.selected = card;
                $('#card' + card['id']).addClass('disableCard');
            }
            else {
                $('#card' + this.selected.id).removeClass('disableCard');
                this.selected = card;
                $('#card' + card['id']).addClass('disableCard');
            }
        },

        discardCards() {
            var dataOut = {
                senderId: data.clientId,
                data: JSON.stringify({'cardToDiscard': this.selected.id}),
                gameId: data.gameState.gameId,
                command: 'DiscardDestinationCard',
            };
            data.serverProxy.commandHandler(JSON.stringify(dataOut));
            $('#discardGameBeginning').hide();
        },

        discardNothing() {
            $('#discardGameBeginning').hide();
        }
    },

});