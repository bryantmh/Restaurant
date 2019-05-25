/////////////////
// Shared Data //
/////////////////
const mockPlayer1 = {
    playerId: 37, 
    gameId: 42, 
    screenName: "Bob",
    color: "#4286f4",
    trainCards: {
        blue: 3,
        black: 4,
        brown: 2,
        green: 7,
        purple: 3,
        red: 4,
        white: 2,
        yellow: 7,
        wild: 2
    },
    destinationCards: [],
    trainCarsRemaining: 40,
    score: 25,
    routesClaimed: []
}

const mockPlayer2 = {
    playerId: 27, 
    gameId: 42, 
    screenName: "Joe",
    color: "#e5000b",
    trainCards: {
        blue: 2,
        black: 5,
        brown: 4,
        green: 0,
        purple: 3,
        red: 0,
        white: 2,
        yellow: 1,
        wild: 2
    },
    destinationCards: [],
    trainCarsRemaining: 40,
    score: 17,
    routesClaimed: []
}



const mockGame = {
    gameOwner: 27,
    gameId: 42,
    playerList: {37: mockPlayer1, 27: mockPlayer2},
    nextPlayer: 37,
    status: 'started',
    name: "Cool Game",
    routes: {},
    destinationCards: [],
    trainCards: {
        blue: 10,
        black: 15,
        brown: 14,
        green: 30,
        purple: 13,
        red: 20,
        white: 12,
        yellow: 21,
        wild: 12
    },
    faceUpTrainCards: {0: "blue", 1: "red", 2: "green", 3: "purple", 4: "black"},
}



const data = {
    games: [],
    gameState: mockGame,
    // gameState: {
    //     gameOwner: null, //player id,
    //     gameId: null,
    //     playerList: {}, // player object with playerId and player object
    //     status: null,
    //     name: null,
    //     routes: {},
    //     destinationCards: {},
    //     trainCards: {},
    //     faceUpTrainCards: {},
    // },
    authToken: null,
    clientId: null,
    gameId: '',
    message: null,
    gamename: null,
    serverProxy: null,
    trainCardsLength: 0,
    destinationCardsLength: 0,
};

