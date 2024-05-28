// Function to handle form submission for transaction
$('#transaction-form').submit(function(event) {
    event.preventDefault(); // Prevent form submission
    const amount = $('#amount').val();
    const from currency = $('#from-currency').val();
    const toCurrency = $('#to-currency').val();

    // Call Binance API to perform currency exchange
    $.ajax({
        url: 'https://api.binance.com/api/v3/ticker/price',
        method: 'GET',
        data: { symbol: from currency + toCurrency },
        success: function(response) {
            const exchange rate = parseFloat(response.price);
            const converted amount = amount * exchange rate;
            alert(`Exchange successful! You will receive ${convertedAmount} ${toCurrency}`);
        },
        error: function(xhr, status, error) {
            alert('Error: ' + error);
        }
    });
});
