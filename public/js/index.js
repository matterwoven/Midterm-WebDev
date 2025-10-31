const form = document.querySelector('form');
const destination = document.getElementById('Destination');
const numOfTravelers = document.querySelector('input[name="NumOfTravelers"]');
const departureDate = document.querySelector('input[name="Date"]');

const destinationError = document.getElementById('destinationError');
const travelersError = document.getElementById('travelersError');
const dateError = document.getElementById('dateError');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    destinationError.textContent = '';
    travelersError.textContent = '';
    dateError.textContent = '';

    if (!destination.value) {
        valid = false;
        destinationError.textContent = 'Please select a destination.';
        destinationError.style.color = 'red';
    }

    const numValue = parseInt(numOfTravelers.value);
    if (isNaN(numValue) || numValue <= 0) {
        valid = false;
        travelersError.textContent = 'Please enter a valid number of travelers.';
        travelersError.style.color = 'red';
    }

    if (departureDate.value) {
        const today = new Date();
        const selectedDate = new Date(departureDate.value);
        today.setHours(0, 0, 0, 0); 
        if (selectedDate < today) {
            valid = false;
            dateError.textContent = 'Date invalid.';
            dateError.style.color = 'red';
        }
    }
    else {
        valid = false;
        dateError.textContent = 'Date invalid.';
        dateError.style.color = 'red';
    }

    if (valid) {
        form.submit();
    }
});
