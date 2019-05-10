///////////////////
// Page Router  //
//////////////////
const router = new VueRouter({
  routes: [
  { path: '/', component: login, name: 'login'},
  { path: '/gamelist', component: gamelist, name: 'gamelist'},
  ]
});



///////////////////
// Main Vue App //
//////////////////
const app = new Vue({
    el: '#app',
    router,
    watch: {},
    data() {
        return data
    },
    methods: {},
});