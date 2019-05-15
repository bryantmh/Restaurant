function execute(command){
    var retVal = eval(command.command)(command.data);
    return retVal;
}

// var getGameList = function(params){
//     return "game list";
// }

// var playerjoined = function(params){
//     return "player joined"
// }

var LoginSuccess = function(params){
    console.log(params);
    return {"authToken": "authtoken"};
    // also returns group of gamestate objects
}

var RegisterSuccess = function(params){
    console.log('registered successfully');
    return 'you have registered successfully';
}

var CreateGameSuccess = function(params){
    // gamestate object
    // will call join game command
    return {'mygame':params.data};
}

var GameCreated = function(params) {
	// gamestate Object
    // add to gamelist
    return {'newgame': params.data};
}

var JoinGameSuccess = function(params){
    return {"gamestate":params.data};
    // gamestate object
}

var StartGameSuccess = function (params){
    return {"start game":true};
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
