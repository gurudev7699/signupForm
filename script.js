document.addEventListener("DOMContentLoaded", function(){


const password = document.querySelector('#password').value
const newPassword = document.querySelector('#confirm-password').value
const errorMessage = document.querySelector('#error');

if (password == "" && newPassword =="") {
    errorMessage.innerHTML= '*Passwords do not match';
} else if ( password===newPassword) {
    errorMessage.innerHTML= ""
}
})