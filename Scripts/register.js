var name1 = document.getElementById('nm');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('nm', name1.value);
    localStorage.setItem('pw', pw.value);
}

function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('nm');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}