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
                senderId: null,
                command: 'Login',
                data: JSON.stringify({'username': username, 'password': password}),
                gameId: null,
                recipientId: null
            };
            this.serverProxy.commandHandler(JSON.stringify(dataOut));
        },

  	    register(username, password) {
            var dataOut = {
                senderId: '',
                command: 'Register',
                data: JSON.stringify({'username': username, 'password': password}),
                gameId: '',
                recipientId: ''
             };
            this.serverProxy.commandHandler(JSON.stringify(dataOut));
        },
    },

    watch: {
        authToken: function() {
            this.$router.push({name: 'gamelist'});
        },
    },

});
