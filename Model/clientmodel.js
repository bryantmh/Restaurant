/////////////////
// Shared Data //
/////////////////
// const mockPlayer1 = {
//     playerId: 37, 
//     gameId: 42, 
//     screenName: "Bob",
//     color: "#4286f4",
//     cardBank: {
//         blueCards: [], // integer ids
//         brownCards: [],
//         greenCards: [],
//         purpleCards: [],
//         redCards: [],
//         whiteCards: [],
//         yellowCards: [],
//         wildCards: [],
//         destinationCards: [
//             {
//                 startCity: "San Diego",
//                 endCity: "Los Angeles",
//                 pointValue: 5,
                
//             },
//             {
//               startCity: "Salt Lake",
//               endCity: "Provo",
//               pointValue: 3,
//             }  // destination card list
//         ], // destination card objects
//     },
//     trainCarsRemaining: 40,
//     score: 25,
//     routesClaimed: []
// }

// const mockPlayer2 = {
//     playerId: 27, 
//     gameId: 42, 
//     screenName: "Joe",
//     color: "#e5000b",
//     trainCards: {
//         blue: 2,
//         black: 5,
//         brown: 4,
//         green: 0,
//         purple: 3,
//         red: 0,
//         white: 2,
//         yellow: 1,
//         wild: 2
//     },
//     destinationCards: [],
//     trainCarsRemaining: 40,
//     score: 17,
//     routesClaimed: []
// }



// const mockGame = {
//     gameOwner: 27,
//     gameId: 42,
//     playerList: {37: mockPlayer1, 27: mockPlayer2},
//     nextPlayer: 37,
//     status: 'started',
//     name: "Cool Game",
//     routes: {},
//     destinationCards: [
//         {
//             startCity: "San Diego",
//             endCity: "Los Angeles",
//             pointValue: 5,
//             playerId: "some-id",
//             completed: false,
//             selected: false,
//         },
//         {
//             startCity: "Salt Lake",
//             endCity: "Provo",
//             pointValue: 3,
//             playerId: "some-id",
//             completed: false,
//             selected: false,
//         }  // destination card list
//     ], // destination card objects
//     trainCards: {
//         blue: 10,
//         black: 15,
//         brown: 14,
//         green: 30,
//         purple: 13,
//         red: 20,
//         white: 12,
//         yellow: 21,
//         wild: 12
//     },
//     faceUpTrainCards: {0: "blue", 1: "red", 2: "green", 3: "purple", 4: "black"},
// }

const data = {
    games: [],
    gameState: null,
    authToken: null,
    clientId: null,
    gameId: '',
    message: null,
    chatMessage: null,
    gamename: null,
    serverProxy: null,
    trainCardsLength: 0,
    // destinationCardsLength: 0,
};

