// 1. Step-1: add click event handler with the submit button 
document.getElementById("btn-submit").addEventListener("click", function () {
    // 2. Step-2: get the get the email address value of the input field
// always remember to use .value to get text from an input field 
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // 3. Step-3: get the get the password value of the input field
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // Verify email and password
    // 4.Danger: DO Not verify email and password on the clien side  
    if (email === "janina@gmail.com" && password === "janina") {
    window.location.href = "bank.html";
    } else {
       alert("Tui password vule gecis , toke amra tejjo ghosona korlam");
}
})