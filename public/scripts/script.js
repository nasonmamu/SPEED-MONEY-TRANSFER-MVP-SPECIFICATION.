// Handle form submission for transactions
document.getElementById('transaction-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const receiver = document.getElementById('receiver').value;
  const amount = document.getElementById('amount').value;
  const receipt = document.getElementById('receipt').files[0];

  // Add your API call logic here

  console.log('Transaction form submitted', { receiver, amount, receipt });
});
