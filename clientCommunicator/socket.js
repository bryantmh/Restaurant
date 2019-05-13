const serverProxy = () => import('./serverProxy');
const clientFacade = () => import('./clientFacade');
const socket = Vue.component('socket', {
    components:{
        clientFacade,
        serverProxy,
    },
    data() { return{
            socket: null,
            clientId: null,
            dataFromServer: null,
            clientIdList: null,
            recipientId: null,
            command: null,
            params: null,
        }
    },
    methods: {
        connect: function(){
            this.socket = new WebSocket("");
            this.socket.oncommand = (event) => {
                var command = JSON.parse(event.data)
                this.command = messageIn.command
                this.clientId = messageIn.YourClientId
                this.clientIdList = messageIn.clientIdList
                this.dataFromServer = messageIn.params
            }
        },
        commandHandler: function(){
            var commandOut = {}
            commandOut.command = this.command
            commandOut.clientId = this.clientId
            commandOut.params = this.params
            clientFacade.execute(this.command, this.params)
            this.socket.send(serverProxy.createCommandMessage(this.command, this.params));
        }
    }
  });
  