document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle dropdown visibility
    function toggleDropdown() {
        var dropdown = document.getElementById('dropdownContent');
        dropdown.classList.toggle('show');
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropinside')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Toggle dropdown visibility on click
    var moreLink = document.getElementById('moreDropdown');
    moreLink.addEventListener('click', function() {
        toggleDropdown();
    });

    // Close dropdown on link click (optional)
    var dropdownLinks = document.querySelectorAll('.dropdown-content .tab-link');
    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var dropdown = document.getElementById('dropdownContent');
            dropdown.classList.remove('show');
        });
    });
});
