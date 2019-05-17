function execute(command){
    var retVal = eval(command.command)(command);
    return retVal;
}

var LoginSuccess = function(params){
    // console.log(params)
    console.log("params data:")
    console.log(params.data.playerId)
    return {
        'login' : "Logged In",
        //"playerId": JSON.parse(params.data).playerId,
        "clientId": params.recipientId,
        "authToken": JSON.parse(params.data).authToken,
    };
}

var CreateGameSuccess = function(params){
    console.log(params.data);
    return {'gameState':JSON.parse(params.data), "newgame":params.data};
}

var JoinGameSuccess = function(params){
    return {"gameState":JSON.parse(params.data)};
}

var GameListSuccess = function(params) {
    return {"games": JSON.parse(params.data).games};
}

var RegisterSuccess = function(params){
    return {
        'login' : "Logged In",
        "clientId": params.recipientId,
        "authToken": JSON.parse(params.data).authToken,
    };
}

var GameCreated = function(params) {
	// gamestate Object
    // add to gamelist
    return {'newgame': params.data};
}

var StartGameSuccess = function (params){
    return {'startgame':true};
    // returns nothing
    // Just put a message saying game has started
}

var PlayerJoinedGame = function(params) {
	// new player id
    // add that to gamestate object
    return {'playerjoined':params.data};
}

var Error = function(params) {
	// try and send command again unless login
    // display to user

    return {'error': params};
}
