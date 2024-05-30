document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.sidebar ul li a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove 'active' class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            // Add 'active' class to the clicked tab
            this.classList.add('active');

            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the corresponding tab content
            const target = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Prevent form submission for demo purposes
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted!');
        });
    });
});
