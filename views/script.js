document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const settingsForm = document.getElementById('settings-form');
    const languageSelect = document.getElementById('language');
    const themeSelect = document.getElementById('theme');
    const backgroundInput = document.getElementById('background');
    const reportTypeSelect = document.getElementById('report-type');
    const generateReportButton = document.getElementById('generate-report');
    const reportOutput = document.getElementById('report-output');
  
    // Load saved settings from localStorage
    if (localStorage.getItem('language')) {
      languageSelect.value = localStorage.getItem('language');
    }
    if (localStorage.getItem('theme')) {
      themeSelect.value = localStorage.getItem('theme');
      document.body.className = localStorage.getItem('theme');
    }
    if (localStorage.getItem('background')) {
      document.body.style.backgroundImage = `url(${localStorage.getItem('background')})`;
    }
  
    transactionForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const amount = document.getElementById('amount').value;
      const fromCurrency = document.getElementById('from-currency').value;
      const toCurrency = document.getElementById('to-currency').value;
  
      // Example API call (replace with actual backend endpoint)
      fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          fromCurrency: fromCurrency,
          toCurrency: toCurrency,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Transaction successful:', data);
          // Optionally update UI or show success message
        })
        .catch(error => {
          console.error('Error processing transaction:', error);
          // Handle error, show message to user
        });
    });
  
    settingsForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Save settings to localStorage
      localStorage.setItem('language', languageSelect.value);
      localStorage.setItem('theme', themeSelect.value);
      document.body.className = themeSelect.value;
  
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem('background', reader.result);
        document.body.style.backgroundImage = `url(${reader.result})`;
      };
      if (backgroundInput.files[0]) {
        reader.readAsDataURL(backgroundInput.files[0]);
      }
    });
  
    generateReportButton.addEventListener('click', () => {
      const reportType = reportTypeSelect.value;
      fetchReport(reportType);
    });
  
    function fetchReport(type) {
      // Example API call (replace with actual backend endpoint)
      fetch(`/api/reports?type=${type}`)
        .then(response => response.json())
        .then(data => displayReport(data))
        .catch(error => console.error('Error fetching report:', error));
    }
  
    function displayReport(data) {
      reportOutput.innerHTML = ''; // Clear previous report output
  
      if (data.length === 0) {
        reportOutput.textContent = 'No data available for this report.';
        return;
      }
  
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      // Create table headers
      const headers = Object.keys(data[0]);
      const headerRow = document.createElement('tr');
      headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
  
      // Create table rows
      data.forEach(item => {
        const row = document.createElement('tr');
        headers.forEach(header => {
          const td = document.createElement('td');
          td.textContent = item[header];
          row.appendChild(td);
        });
        tbody.appendChild(row);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      reportOutput.appendChild(table);
    }
  });
  