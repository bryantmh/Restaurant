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
            var commandIn = JSON.parse(event.data);
            var retVal = execute(commandIn);
            if(retVal !== 'undefined' || typeof retVal != 'object'){
              	console.log(retVal);
            } else {
				for (var i in retVal) {
					switch(i){
						case 'newgame':
							games.push(retval[i]);
							break;
						case 'startgame':
							alert('game started!');
							break;
						case 'playerjoined':
							gameState.playerlist.push(retval[i]);
							break;
						case 'error':
							console.log(retval[i]);
							break;
						default:
							this[i] = retVal[i];
					}
					
				}
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