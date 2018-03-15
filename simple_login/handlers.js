var verified;
function welcome(response){

    // response.write("welcome!");
    return "welcome";

}

function succeed(response){
    return "login successfully!";
}

function fail(response){

    return "login failed";
}


exports.welcome = welcome;
exports.succeed = succeed;
exports.fail = fail;
