function route(response, handler, pathname){
    // console.log(pathname);
    // console.log(handler[pathname]);
    if (typeof handler[pathname] === 'function') {
        return handler[pathname]();
    } else {
        return "404";
    }

}

exports.route = route;
