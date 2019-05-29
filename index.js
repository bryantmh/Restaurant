///////////////////
// Page Router  //
//////////////////
const router = new VueRouter({
    routes: [
    { path: '/', component: login, name: 'login'},
    { path: '/gamelist', component: gamelist, name: 'gamelist'},
    { path: '/game', component: game, name: 'game'},
    { path: '/playerlist', component: playerlist, name: 'playerlist'},
    { path: '/destination-card', component: destinationCard, name: 'destinationCard'},
    { path: '/chat', component: chat, name: 'chat'},
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
    
    mounted() {
        this.serverProxy = new ServerProxy("ws://localhost:5001/"); //ws://10.37.41.216:8080/ticket-to-ride-back-end/
        this.serverProxy.socketRun();
    },
});