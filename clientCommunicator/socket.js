const serverProxy = () => import('./serverProxy');
const ICommand = () => import('./ICommand');
const socket = Vue.component('socket', {
    components:{
        ICommand,
        serverProxy,
    },
    data() { return{
            socket: null,
            clientId: null,
            command: null,
            params: null,
            gameId: null,
        }
    },
    methods: {
        connect: function(){
            this.socket = new WebSocket("");
            this.socket.oncommand = (event) => {
                var command = JSON.parse(event.data)
                this.command = messageIn.command
                this.clientId = messageIn.YourClientId
                this.gameId = messageIn.gameId
                this.gameId = messageIn.gameId
                this.params = messageIn.params
            }
        },
        commandHandler: function(){
            var commandOut = {}
            commandOut.command = this.command
            commandOut.params = this.params
            commandOut.clientId = this.clientId
            commandOut.gameId = this.gameId
            ICommand.execute(this.command, this.params)
            this.socket.send(commandOut);
        }
    }
  });
  