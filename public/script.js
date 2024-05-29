$('#transaction-form').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    const amount = $('#amount').val();
    const fromCurrency = $('#from-currency').val();
    const toCurrency = $('#to-currency').val();

    // Call Binance API to perform currency exchange
    $.ajax({
        url: 'https://api.binance.com/api/v3/ticker/price',
        method: 'GET',
        data: { symbol: fromCurrency + toCurrency },
        success: function(response) {
            const exchangeRate = parseFloat(response.price);
            const convertedAmount = amount * exchangeRate;
            alert(`Exchange successful! You will receive ${convertedAmount} ${toCurrency}`);
        },
        error: function(xhr, status, error) {
            alert('Error: ' + error);
        }
    });
});
