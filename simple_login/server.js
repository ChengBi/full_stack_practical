var http = require("http")
var url = require("url")
var routers = require("./routers")


function serverStart(handler){

    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        var content = routers.route(response, handler, pathname);
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
}
exports.serverStart = serverStart;
