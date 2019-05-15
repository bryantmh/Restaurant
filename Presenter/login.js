/////////////////////
// Login Component //
/////////////////////

const login = Vue.component('login', {
  template: loginHTML,

  data() {
    return data
  },
  methods: {
  	login(username, password) {
      console.log(username);
      var dataOut = {
            senderId: null,
            command: 'Login',
            data: {'username': username, 'password': password},
            gameId: null,
            recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
  	},
  	register(username, password) {
      var dataOut = {
            senderId: null,
            command: 'Register',
            data: {'username': username, 'password': password},
            gameId: null,
            recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
  	},
  },

  watch: {
    gameState: function() {
      this.$router.push({name: 'game'});
    }
    // todo watches on data from login and register
  
  },

});
