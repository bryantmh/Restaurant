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
            data: JSON.stringify({'username': username, 'password': password}),
            gameId: null,
            recipientId: null
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
    // login(username, password) {
    //   console.log(username);
    //   var dataOut = {
    //         senderId: null,
    //         command: 'Error',
    //         data: "Incorrect Username/Password",
    //         gameId: null,
    //         recipientId: null
    //   };
    //   this.$parent.commandHandler(JSON.stringify(dataOut));
  	// },
  	register(username, password) {
      var dataOut = {
            senderId: '',
            command: 'Register',
            data: JSON.stringify({'username': username, 'password': password}),
            gameId: '',
            recipientId: ''
      };
      this.$parent.commandHandler(JSON.stringify(dataOut));
    },
  },

  watch: {
    authToken: function() {
      this.$router.push({name: 'gamelist'});
    },
    message: function() {
      console.log("in message watch handler");
      $( "#errorMessage" ).text(this.message);
      $( "#errorMessage" ).css( "display", "block" );
    }
  },

});
