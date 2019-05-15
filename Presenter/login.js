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
      var dataOut = {
            senderid: null,
            command: 'Login', // This should be login on real thing
            data: {'username': username, 'password': password},
            gameid: null,
            recipientid: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
  	},
  	register(username, password) {
      var dataOut = {
            senderid: null,
            command: 'Register',
            data: {'username': username, 'password': password},
            gameid: null,
            recipientid: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
  	},
  },

  watch: {
    authToken: function() {
      this.$router.push({name: 'gamelist'});
    }
    // todo watches on data from login and register
  
  },

});
