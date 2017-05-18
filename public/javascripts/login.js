function loginSubmit() {
    if (validateAccount()) {
        alert("You have successfully logged in!");
    }
    else {
        alert("Invalid email/password. Please try again.");
    }
}

function validateAccount() {
    /* For testing only*/
    return Math.random() >= 0.5;
}