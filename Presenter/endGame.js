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

        displayModal() {
    		$('#viewEndGameModal').show();
        },

        // getResults() {
        //     var output = "";
        //     for (var player in this.gameState.endGame) {
        //         var temp = "Route Points:" + player.routePoints + "\n" + "Destination Points Earned:" + player.destinationCardPoints + "\n" +
        //                 "Destination Points Lost:" + player.destinationCardPointsLost + "\n" +  "" + player.mostRoutesPoints
        //         output.concat(player.routePoints)
        //     }
        // }
        
        getTotalPoints(player) {
            return player.routePoints + player.destinationCardPoints 
            + player.destinationCardPointsLost + player.mostRoutesPoints;
        }
    }

});