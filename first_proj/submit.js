var submited = false;
function submit(){
    if (!submited){
        document.getElementById("content").innerHTML = "Hello, world!";
    }
    else {
        document.getElementById("content").innerHTML = "";
    }
    submited = !submited;
}
