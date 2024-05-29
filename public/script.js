// Example script.js following Betty Style

// Constants in SCREAMING_SNAKE_CASE
const API_URL = 'https://api.example.com/';

// Function declaration using function keyword
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    const amount = $('#amount').val(); // Using camelCase for variables
    const fromCurrency = $('#from-currency').val();
    const toCurrency = $('#to-currency').val();

    // Call API endpoint using fetch (alternative to $.ajax)
    fetch(`${API_URL}exchange`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount, fromCurrency, toCurrency })
    })
    .then(response => response.json())
    .then(data => {
        const convertedAmount = data.convertedAmount;
        alert(`Exchange successful! You will receive ${convertedAmount} ${toCurrency}`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during exchange.');
    });
}
