
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");


var usersList = [];

if (localStorage.getItem("users") != null) {
    usersList = JSON.parse(localStorage.getItem("users"))
};


document.getElementById("loginBtn").onclick = function () {
    login()
};



function login() {
    var user = {
        userEmail: userEmailInput.value,
        userPassword: userPasswordInput.value,
    }


    if (emptyValidation(user) != true) {

        if (isInclude(user)) {
            clearForm();

            localStorage.setItem("index", JSON.stringify(index))
            window.location.href = "home.html";

        } else {
            document.getElementById("incorrectMsg").classList.add("d-block")
            document.getElementById("incorrectMsg").classList.remove("d-none")
            document.getElementById("requiredMsg").classList.add("d-none")
            document.getElementById("requiredMsg").classList.remove("d-block")
        }
    }

}

var index = '';

function isInclude(user) {

    for (var i = 0; i < usersList.length; i++) {

        if (usersList[i].userEmail == user.userEmail) {
            index = i;
            return true;
        }
    }

    return false;


}


function clearForm() {
    userEmailInput.value = null;
    userPasswordInput.value = null;
}

function emptyValidation(user) {

    if (user.userEmail == "" || user.userPassword == "") {

        document.getElementById("requiredMsg").classList.remove("d-none")
        document.getElementById("requiredMsg").classList.add("d-block")
        document.getElementById("incorrectMsg").classList.add("d-none")
        document.getElementById("incorrectMsg").classList.remove("d-block")
        return true;

    }
}





