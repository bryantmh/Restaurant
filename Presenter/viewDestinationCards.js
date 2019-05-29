/////////////////////////////////////
// DestinationCard Modal Component //
/////////////////////////////////////

const viewDestinationCards = Vue.component('viewDestinationCards', {
    template: viewDestinationCardsHTML,

    data() {
        return data;
    },

    methods: {
    	hideModal() {
    		$('#viewDestModal').hide();
    	}
    }

});