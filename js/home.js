


var usersList = [];

if (localStorage.getItem("users") != null) {
    usersList = JSON.parse(localStorage.getItem("users"))
};

var index = localStorage.getItem("index");

var box = ``;


box += `

<h1>Welcome ${usersList[index].userName}</h1>

`

document.getElementById("welcome").innerHTML = box;


document.getElementById("logOut").onclick = function(){
    logOut();
}

function logOut(){

    window.location.href = "index.html";
}