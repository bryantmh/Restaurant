/////////////////////
// Login Component //
/////////////////////
const login = Vue.component('login', {
    template: loginHTML,

    data() {
        return loginData
    },

    methods: {
  	    login(username, password) {
            var messageData = JSON.stringify({'username': username, 'password': password});
            var message = new Message('Login', messageData, null, null).toString();
            this.$parent.serverProxy.commandHandler(message);
        },

  	    register(username, password) {
            var messageData = JSON.stringify({'username': username, 'password': password});
            var message = new Message('Register', messageData, null, null).toString();
            this.$parent.serverProxy.commandHandler(message);
        },
    },

    watch: {
        '$parent.authToken': function() {
            this.$router.push({name: 'gamelist'});
        },
    },

});
