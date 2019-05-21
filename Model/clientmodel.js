/////////////////
// Shared Data //
/////////////////

const data = {
    games: [],
    gameState: {
        gameOwner: null, //player id,
        gameId: null,
        playerList: {}, // player object with playerId, gameId, and screenName
        status: null
    },
    authToken: null,
    clientId: null,
    gameId: '',
    message: null,
    gamename: null,
    serverProxy: null
};
