//////////////////////
// myinfo Component //
//////////////////////
const myinfo = Vue.component('myinfo', {
  	template: myinfoHTML,

  	data() {
    	return data
  	},

  	methods: {
    	viewDestinationCards() {
        $('#viewDestModal').show();
    	},
  	},

   	watch: {

    },

    mounted() {
      
    },
});
