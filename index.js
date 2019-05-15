///////////////////
// Page Router  //
//////////////////
const router = new VueRouter({
  routes: [
  { path: '/', component: login, name: 'login'},
  { path: '/gamelist', component: gamelist, name: 'gamelist'},
  { path: '/game', component: game, name: 'game'},
  ]
});



///////////////////
// Main Vue App //
//////////////////
const app = new Vue({
    el: '#app',
    data() {
      return data
    },
    router,
    methods: {
      socketRun(){
        this.socket.onmessage = (event) => {
            console.log(event);
            var commandIn = JSON.parse(event.data);
            var retVal = execute(commandIn);
            for (var i in retVal) {
              this[i] = retVal[i];
            }
        }
      },
      commandHandler: function(data){
          this.socket.send(data);
      },

    },
    mounted() {
      this.socket = new WebSocket("wss://echo.websocket.org");
    },
    watch: {
      socket: function() {
        this.socketRun();
      }
    }
});