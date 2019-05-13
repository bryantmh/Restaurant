function execute(command, params){
    eval(command)(params);
}

var startGame = function (paramArray){
    return "start game";
}

var getGameList = function(paramArray){
    return "game list";
}

var joinGame = function(paramArray){
    return "join game";
}

var createGame = function(paramArray){
    return "createGame";
}

var login = function(paramArray){
    return "login";
}

var register = function(paramArray){
    return "register";
}