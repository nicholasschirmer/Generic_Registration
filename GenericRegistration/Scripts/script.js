var error = "";
var vis = true;
var msgType = 1;

document.onkeydown = function (evt) {
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if (keyCode == 13) {
        checkEmpty();
    }
}

function checkEmpty() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var empty = false;
    if (fName == "") {
        empty = true;
        error = "please enter your first name";
        showMsg(error, 1);
    } else if (lName == "") {
        empty = true;
        error = "please enter your last name";
        showMsg(error, 1);
    } else if (email == "") {
        empty = true;
        error = "please enter your email address";
        showMsg(error, 1);
    } else if (pass == "") {
        empty = true;
        error = "please enter your password";
        showMsg(error, 1);
    } else if (empty == false) {
        validateEmail();
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        validatePass();
    } else {
        error = "You have entered an invalid email address!";
        showMsg(error, 1);
    }
}

function validatePass() {
    var pass = document.getElementById("pass").value;
    var tmpPass = document.getElementById("tempPass").value;
    var passValid = false;
    if (pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.length >= 8) {
        passValid = true;
    } else {
        passValid = false;
        error = "your password must contain <lu><li>1 uppercase letter.</li> <li>1 lowercase letter.</li> <li>1 number.</li> <li>be atleast 8 characters long</li></ul>";
        showMsg(error, 1);
    }
    if (passValid == true) {
        if (pass != tmpPass) {
            alert("Passwords do not match.");
            return false;
        } else {
            var submitted = true;
            error = "api response";
            document.getElementById("form").submit();
            return true;
        }
    }
}

function showMsg(error, msgType) {
    var msgBlock = document.getElementById("msgBlock");
    var msgHead = document.getElementById("msgHead");
    var toast = document.getElementById("toast");
    if (msgType == 1) {
        msgBlock.style.color = "#ff0000";
        msgHead.innerHTML = "<h3>Error</h3>";
    }
    msgBlock.innerHTML = error;
    toast.style.visibility = "visible";
}

function hideMsg() {
    var toast = document.getElementById("toast");
    toast.style.visibility = "hidden";
}