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
            if(retVal !== 'undefined' || typeof retVal != 'object'){
              console.log(retVal);
            } else {
              for (var i in retVal) {
                switch(i){
                  case 'newgame':
                    games.push(retval[i]);
                    continue;
                  case 'mygame':
                    gamestate = retval[i];
                    var dataOut = {
                      senderid: gamestate.gameowner,
                      command: 'JoinGame',
                      data: {'gameid': gamestate.gameid},
                      gameid: gamestate.gameid,
                      recipientid: null,
                    }
                    this.commandHandler(JSON.stringify(dataOut));
                    continue;
                  case 'startgame':
                    alert('game started!');
                    continue;
                  case 'playerjoined':
                    gamestate.playerlist.push(retval[i]);
                    continue;
                  case 'error':
                    console.log(retval[i]);
                    continue;
                }
                this[i] = retVal[i];
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