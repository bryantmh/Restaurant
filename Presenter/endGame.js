/////////////////////////////////////
// DestinationCard Modal Component //
/////////////////////////////////////

const endGame = Vue.component('endGame', {
    template: endGameHTML,

    data() {
        return data;
    },

    methods: {
    	hideModal() {
    		$('#viewEndGameModal').hide();
        },
        
        getTotalPoints(player) {
            return player.routePoints + player.destinationCardPoints 
            + player.destinationCardPointsLost + player.mostRoutesPoints;
        }
    }

});