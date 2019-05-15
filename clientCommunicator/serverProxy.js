function createCommandMessage(id, command, params){
    let string = '{"clientId":'+id.toString()+'"command":"' + command.toString() + '","params":'+params.toString() +"}";
    return JSON.parse(string);
}