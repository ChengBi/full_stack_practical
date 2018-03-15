var server = require("./server");
var handlers = require("./handlers")

var handler = {};
handler["/"] = handlers.welcome;
handler["/succeed"] = handlers.login;
handler["/fail"] = handlers.login;

server.serverStart(handler);
