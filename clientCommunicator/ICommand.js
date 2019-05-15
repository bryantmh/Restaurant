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
    return "register";
}

var CreateGameSuccess = function(params){
    return "createGame";
    // gamestate object
    // will call join game command
}

var GameCreated = function(params) {
	// gamestate Object
	// add to gamelist
}

var JoinGameSuccess = function(params){
    return "join game";
    // gamestate object
}

var StartGameSuccess = function (params){
    return "start game";
    // returns nothing
    // Just put a message saying game has started
}

var PlayerJoinedGame = function(params) {
	// new player id
	// add that to gamestate object
}

var Error = function(params) {
	return "error";
	// try and send command again unless login
	// display to user
}
