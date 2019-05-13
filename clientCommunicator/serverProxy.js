function createCommandMessage(command, params){
    let string = '{"command":"' + command.toString() + '","params":'+params.toString() +"}";
    return JSON.parse(string);
}