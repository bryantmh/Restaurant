function execute(command){
    var retVal = eval(command.command)(command.data);
    return retVal;
}

var LoginSuccess = function(params){
    return {
        "clientId": params.senderId,
        "authToken": params.data.authToken,
        "games": params.data.gameList
    };
}

var RegisterSuccess = function(params){
    return {"message": 'You have registered successfully'};
}

var CreateGameSuccess = function(params){
    return {'gameState':params.data.game};
}

var JoinGameSuccess = function(params){
    return {"gameState":params.data.game};
}



var GameCreated = function(params) {
	// gamestate Object
    // add to gamelist
    return {'newgame': params.data};
}

var StartGame = function (params){
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
