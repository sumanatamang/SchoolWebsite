
let form = document.contact_form;
let fullname = document.contact_form.fname;
let email = document.contact_form.email;
let msg = document.contact_form.msg;
console.log(fullname, email, msg);

form.addEventListener("submit", function (event) {
    if (fullname.value.length == 0) {
        fullname.nextElementSibling.innerHTML = "Must Enter Full Name!";
        event.preventDefault();
    } else {
        fullname.nextElementSibling.innerHTML = "";
    }

    if (email.value.length == 0) {
        email.nextElementSibling.innerHTML = "Must Enter Correct Email Address!";
        event.preventDefault();
    } else {
        email.nextElementSibling.innerHTML = "";
    }

    if (msg.value.length == 0) {
        msg.nextElementSibling.innerHTML = "should not be left blank!";
        event.preventDefault();
    } else {
        msg.nextElementSibling.innerHTML = "";
    }
});

email.addEventListener("keyup", function () {
    if (this.value.indexOf("@") == -1 || this.value.indexOf("@") != this.value.lastIndexOf("@") || this.value.indexOf(".") == -1) {
        email.nextElementSibling.innerHTML = "Invalid Email Address";
    }
    else {
        email.nextElementSibling.innerHTML = "";
    }
});