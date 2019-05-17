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
                console.log("command received:");
                console.log(commandIn);


                var retVal = execute(commandIn);
                // console.log("retVal received:");
                // console.log(retVal);
                if (retVal == 'undefined' || typeof retVal != 'object'){
                    console.log(retVal);
                } 
                else {
                    for (var i in retVal) {
                        switch(i) {
                        case 'login':
                            this.clientId = retVal.clientId;
                            //this.playerId = retVal.playerId;
                            var dataOut = {
                                senderId: retVal.clientId,
                                //playerId: retVal.playerId,
                                command: 'GetGameList',
                                data: null,
                                gameId: null,
                                recipientId: null
                            };
                            // console.log("login data sent:");
                            // console.log(dataOut);

                            this.commandHandler(JSON.stringify(dataOut));
                            break;
                        case 'newgame':
                            var data = retVal.newgame;
                            this.games.push(JSON.parse(data).game);
                            break;
                        case 'startgame':
                            // console.log("in startgame");
                            // var player = {playerId: this.clientId,gameId:this.gameId,screenName:this.username};
                            // this.$set(this.gameState.playerList, JSON.parse(player)['player']['playerId'], JSON.parse(player)['player']);
                            this.$set(this.gameState, 'status', "started");
                            break;
                        case 'playerjoined':
                            // console.log(retVal[i]);
                            // console.log(JSON.parse(retVal[i]));
                            var gameid = JSON.parse(retVal[i])['player']['gameId'];
                            for(var i = 0; i < this.games.length; i++){
                                if(this.games[i].gameId == gameId){
                                    this.$set(this.games[i].playerList, JSON.parse(retVal[i])['player']['playerId'], JSON.parse(retVal[i])['player']);
                                }
                            }
                            if(this.gameState.gameId == gameid){
                                this.$set(this.gameState.playerList, JSON.parse(retVal[i])['player']['playerId'], JSON.parse(retVal[i])['player']);
                            }
                            
                            // this.gameState.playerList[JSON.parse(retVal[i])['player']['playerId']] = JSON.parse(retVal[i])['player'];
                            break;
                        case 'error':
                            console.log(retVal); 
                            // console.log(retVal.error); 
                            // var error = retVal[.error.data;
                            // console.log(JSON.parse(error).message);
                            // this.message = JSON.stringify(retVal[i]);
                            var errorObject = JSON.parse(retVal[i].data)
                            this.message = errorObject.message
                            break;
                        case 'gameState':
                            this[i] = JSON.parse(retVal.newgame);
                            break;
                        default:
                            this[i] = retVal[i];
                        }
                    }
                }
            }
        },
        commandHandler: function(data){
           console.log(data);
            this.socket.send(data);
        },
    },
    mounted() {
        // this.socket = new WebSocket("ws://localhost:8080/ticket-to-ride-back-end/");
        this.socket = new WebSocket("ws://10.37.41.216:8080/ticket-to-ride-back-end/");
        //this.socketRun();

        // this.socket = new WebSocket("wss://echo.websocket.org");
    },
    watch: {
        socket: function() {
            this.socketRun();
        }
    },
});