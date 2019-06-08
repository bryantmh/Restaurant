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
            // if start game
            if (data.gameState.players[data.clientId].cardBank.destinationCards.length == 3 && data.newDestinationCards == null) {

                if (this.selected.length == 0) {
                    this.selected.push(card['id']);
                    $('#card' + card['id']).addClass('disableCard');
                }
                else {
                    var tempCard = this.selected.pop();
                    $('#card' + tempCard).removeClass('disableCard');

                    this.selected.push(card['id']);
                    $('#card' + card['id']).addClass('disableCard');
                }
                
            }
            // not start game
            else {
                var index = this.getDestinationCardsIndex(card)

                // if card is already selected
                if (index >= 0) {
                    $('#card' + card['id']).removeClass('disableCard');
                    this.selected.splice(index,1);
                }
                else if (this.selected.length < 2) {
                    this.selected.push(card['id']);
                    $('#card' + card['id']).addClass('disableCard');
                }
                // too many cards selected
                else {
                    var tempCard = this.selected.pop();
                    $('#card' + tempCard).removeClass('disableCard');

                    this.selected.push(card['id']);
                    $('#card' + card['id']).addClass('disableCard');
                }

            }
        },

        getDestinationCardsIndex(card) {
            for (var i = 0; i < this.selected.length; i++) {
                if (this.selected[i] == card['id']) {
                    return i;
                }
           }
           return -1;
        },

        discardCards() {
            // if first round
            if (data.gameState.players[data.clientId].cardBank.destinationCards.length == 3 && data.newDestinationCards == null) {
                var messageData = JSON.stringify({'cardsToDiscard': this.selected});
                var message = new Message('DiscardDestinationCardInitial', messageData, data.clientId, data.gameState.gameId).toString();
                data.serverProxy.commandHandler(message);
            } else {
                var messageData = JSON.stringify({'cardsToDiscard': this.selected});
                var message = new Message('DiscardDestinationCard', messageData, data.clientId, data.gameState.gameId).toString();
                data.serverProxy.commandHandler(message);
            }
            
            for (var i = 0; i < this.selected.length; i++) {
                $('#card' + this.selected[i]).removeClass('disableCard');
            }

            if (data.newDestinationCards != null) {
                for (var i = 0; i < data.newDestinationCards.length; i++) {
                    if (!this.selected.includes(i)) {
                        data.gameState.players[data.clientId].cardBank.destinationCards.push(data.newDestinationCards[i]);
                    }
                }
            }
            this.selected = [];
            $('#discardGameBeginning').hide();
        },

        discardNothing() {
            for (var i = 0; i < this.selected.length; i++) {
                $('#card' + this.selected[i]).removeClass('disableCard');
            }

            if (data.newDestinationCards != null) {
                for (var i = 0; i < data.newDestinationCards.length; i++) {
                    if (!this.selected.includes(i)) {
                        data.gameState.players[data.clientId].cardBank.destinationCards.push(data.newDestinationCards[i]);
                    }
                }
            }

            // if first round
            if (data.gameState.players[data.clientId].cardBank.destinationCards.length == 3) {
                var messageData = JSON.stringify({'cardsToDiscard': []});
                var message = new Message('DiscardDestinationCardInitial', messageData, data.clientId, data.gameState.gameId).toString();
                data.serverProxy.commandHandler(message);
            } else {
                var messageData = JSON.stringify({'cardsToDiscard': []});
                var message = new Message('DiscardDestinationCard', messageData, data.clientId, data.gameState.gameId).toString();
                data.serverProxy.commandHandler(message);
            }

            this.selected = [];
            $('#discardGameBeginning').hide();
        }
    },

});