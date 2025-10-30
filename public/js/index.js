let firstName = document.getElementById('Email');
let lastName = document.getElementById('Name');

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    let valid = true;


    if (firstName.value.trim() === '') {
        valid = false;
    }

    if (lastName.value.trim() === '') {
        valid = false;
    }

    if (valid === true) {
        form.submit(); 
    }
    event.preventDefault();
});