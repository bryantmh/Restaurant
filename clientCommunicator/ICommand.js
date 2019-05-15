function execute(command, params){
    eval(command)(params);
}

var startGame = function (params){
    return "start game";
}

var getGameList = function(params){
    return "game list";
}

var joinGame = function(params){
    return "join game";
}

var createGame = function(params){
    return "createGame";
}

var playerjoined = function(params){
    return "player joined"
}

var login = function(params){
    return "login";
}

var register = function(params){
    return "register";
}