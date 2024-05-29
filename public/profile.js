// JavaScript for profile page

$(document).ready(function() {
    // Function to handle profile picture upload
    $('#profile-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform AJAX request to handle image upload
        $.ajax({
            url: '/upload-profile-picture', // Example route to handle image upload in the server
            method: 'POST',
            data: new FormData(this),
            contentType: false,
            processData: false,
            success: function(response) {
                // Display uploaded profile picture
                $('#profile-picture').attr('src', response.imageUrl).show();
            },
            error: function(xhr, status, error) {
                alert('Error uploading profile picture: ' + error);
            }
        });
    });
});
