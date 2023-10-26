Element.addEventListener('event', functionName [, Boolean]);

function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.ariaValueMax.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);