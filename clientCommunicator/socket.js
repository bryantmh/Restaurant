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
            object: null,
            gameId: null,
        }
    },
    methods: {
        connect: function(){
            this.socket = new WebSocket("");
            this.socket.onmessage = (event) => {
                var command = JSON.parse(event.data)
                this.command = messageIn.command
                this.clientId = messageIn.YourClientId
                this.gameId = messageIn.gameId
                this.object = messageIn.object
                ICommand.execute(this.command, this.object)
            }
        },
        commandHandler: function(){
            var commandOut = {}
            commandOut.command = this.command
            commandOut.object = this.object
            commandOut.clientId = this.clientId
            commandOut.gameId = this.gameId
            this.socket.send(commandOut);
        }
    }
  });
  