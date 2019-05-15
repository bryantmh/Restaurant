/////////////////
// Shared Data //
/////////////////

const data = {
    games: [{
        gameOwner: "Me",//player id,
        gameId: "123",
        players: [{playerId: "myID", screenName: "Me"}, {playerId: 'sdfasdf', screenName: "You"}], // player object with playerId and screenName
        status: "created" //created or started
    },],
    gameState: {
        gameOwner: null,//player id,
        gameId: null,
        players: [], // player object with playerId and screenName
        status: null //created or started
    },
    authToken: null,
    socket: null,
    clientId: null,
    gameId: null,
    message: null,
    username: null,
    password: null,
};


// root state object.
// each Vuex instance is just a single state tree.
// const state = {
//     games: [
//     // list of gameStates
//             {
//                     userId: "Username",
//                     numberOfPlayers: "3",
//             },
//             {
//                     userId: "Tacos4Life",
//                     numberOfPlayers: "2",
//             },
//             {
//                     userId: "TheWinner13",
//                     numberOfPlayers: "4",
//             },
//             {
//                     userId: "TheLoser145",
//                     numberOfPlayers: "2",
//             }
//     ],
//     gameState: {
//         gameOwner: null,
//         gameID: null,
//         playerList: [
//             "Tacos4Life",
//             "TheWinner13",
//             "TheLoser145",
//         ],
//         status,
//     },
// }

// // mutations are operations that actually mutates the state.
// // each mutation handler gets the entire state tree as the
// // first argument, followed by additional payload arguments.
// // mutations must be synchronous and can be recorded by plugins
// // for debugging purposes.
// const mutations = {
//   SET_ENTEREDUSERNAME (state, newValue) {
//     state.enteredUsername = newValue
//   },
// }

// // actions are functions that cause side effects and can involve
// // asynchronous operations.
// const actions = {
//    setEnteredUsername: ({commit, state}, newValue) => {
//     commit('SET_ENTEREDUSERNAME', newValue)
//     return state.enteredUsername
//   },
// }

// // getters are functions
// const getters = {
//     enteredUsername() {return state.enteredUsername},
// }


// const store = new Vuex.Store({
//   state,
//   getters,
//   actions,
//   mutations
// })
