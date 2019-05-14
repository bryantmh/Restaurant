/////////////////////
// Login Component //
/////////////////////
const Socket = () => import('./clientCommunicator/socket.js')

const loginData = {
	enteredPassword: "stuff and things",
	socket: Socket,
}

const login = Vue.component('login', {
  template: loginHTML,

  data() {
    return loginData
  },
  methods: {
  	login() {
  		this.socket.data =  { socket: . . .
  		}
  		this.socket.connect()
  	},
  	register() {

  	}
  },
  watch: {
  	Vuex.authToken() {
  		doMything()
  		// var retVal = IComamnd.execute(socket.commandIn)
  	}
  },
  computed: Vuex.mapGetters([
    'enteredUsername'
  ]),
  methods: Vuex.mapActions([
    'setEnteredUsername',
  ])
});
