let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm-password');

password.addEventListener('input', validate);
confirm_password.addEventListener('input', validate);

function validate() {
    if (password.value === '' || confirm_password.value === '') {
        password.style.border = '1px solid red';
        confirm_password.style.border = '1px solid red';
    } 
    else if (password.value === confirm_password.value) {
        password.style.border = '1px solid green';
        confirm_password.style.border = '1px solid green';
    }
}