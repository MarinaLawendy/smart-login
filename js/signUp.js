const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");

var usersList = [];


if (localStorage.getItem("users") != null){
    usersList = JSON.parse(localStorage.getItem("users"))
};


document.getElementById("signUpBtn").onclick = function(){
    signUp()
};


function emptyValidation(user){
    if(user.userName == "" || user.userEmail == "" || user.userPassword == ""){

        requiredMsg()
        return true;

    }
}

function signUp(){
    var user = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userPassword: userPasswordInput.value,
    }

    if(emptyValidation(user) != true){

        if(isInclude(user)){
            existMsg()

        }else{
            clearForm();
            usersList.push(user);
            localStorage.setItem( "users" ,JSON.stringify(usersList));
            SuccessMsg()
        }
      
    }
}


function isInclude(user){

    for (var i=0; i < usersList.length; i++){

        if (usersList[i].userEmail == user.userEmail){
            return true;

        }
    }
    return false;
}



function clearForm(){
    userNameInput.value = null;
    userEmailInput.value = null;
    userPasswordInput.value = null;
}



function requiredMsg(){
    document.getElementById("requiredMsg").classList.remove("d-none")
    document.getElementById("requiredMsg").classList.add("d-block")
    document.getElementById("SuccessMsg").classList.remove("d-block")
    document.getElementById("SuccessMsg").classList.add("d-none")
    document.getElementById("existMsg").classList.remove("d-block")
    document.getElementById("existMsg").classList.add("d-none")
}

function SuccessMsg(){
    document.getElementById("SuccessMsg").classList.remove("d-none")
    document.getElementById("SuccessMsg").classList.add("d-block")
    document.getElementById("requiredMsg").classList.remove("d-block")
    document.getElementById("requiredMsg").classList.add("d-none")
    document.getElementById("existMsg").classList.remove("d-block")
    document.getElementById("existMsg").classList.add("d-none")
}

function existMsg(){
    document.getElementById("existMsg").classList.remove("d-none")
    document.getElementById("existMsg").classList.add("d-block")
    document.getElementById("requiredMsg").classList.remove("d-block")
    document.getElementById("requiredMsg").classList.add("d-none")
    document.getElementById("SuccessMsg").classList.remove("d-block")
    document.getElementById("SuccessMsg").classList.add("d-none")
}

