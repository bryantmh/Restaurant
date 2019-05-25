////////////////////
// Playerlist Component //
////////////////////
const playerlist = Vue.component('playerlist', {
    template: playerlistHTML,

    data() {
      return data
    },

    methods: {

        getColor(player) {
            return "color:" + player.color;
        }
    },

   watch: {
      
    },
    
mounted() {
    if (this.authToken == null) {
            this.$router.push({name: 'login'});
    }
},

});