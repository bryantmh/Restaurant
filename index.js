///////////////////
// Page Router  //
//////////////////
const router = new VueRouter({
    routes: [
        {path: '/', component: home, name: 'home'},
    ]
});



///////////////////
// Main Vue App //
//////////////////
const app = new Vue({
    el: '#app',

    data() {
        return {};
    },

    router
    
});