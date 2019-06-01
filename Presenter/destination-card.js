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
            var messageData = JSON.stringify({'cardsToDiscard': [this.selected.id]});
            var message = new Message('DiscardDestinationCard', messageData, data.clientId, data.gameState.gameId).toString();
            data.serverProxy.commandHandler(message);
            $('#discardGameBeginning').hide();
        },

        discardNothing() {
            $('#discardGameBeginning').hide();
        }
    },

});