////////////////////
// Game Component //
////////////////////
const game = Vue.component('game', {
  template: gameHTML,

  data() {
    return data
  },
  methods: {
    addUser(user) {
        this.users.push(user);
    }
},
});
