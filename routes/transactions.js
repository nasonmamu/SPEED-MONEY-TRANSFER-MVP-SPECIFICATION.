// Function to handle transaction form submission
document.getElementById('transactionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('receiver', document.getElementById('receiver').value);
    formData.append('amount', document.getElementById('amount').value);
  
    const receipt = document.getElementById('receipt').files[0];
    if (receipt) {
      formData.append('receipt', receipt);
    }
  
    try {
      const response = await fetch('/api/transactions/transaction', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
          // Add other headers as needed (e.g., Content-Type for FormData)
        }
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Transaction created successfully!');
        // Optionally, redirect to a success page or update UI
        window.location.href = '/dashboard.html'; // Example redirect to dashboard
      } else {
        alert(`Transaction failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during transaction creation:', error);
      alert('An error occurred during transaction creation.');
    }
  });
  