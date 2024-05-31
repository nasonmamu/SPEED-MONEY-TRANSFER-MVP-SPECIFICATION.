// Example profile.js

// Function to fetch and display user profile data
function fetchUserProfile() {
    fetch('/api/users/profile')
      .then(response => response.json())
      .then(data => {
        // Assuming there's an element with id "profile-info" to display profile data
        const profileInfo = document.getElementById('profile-info');
        profileInfo.innerHTML = `<p>Username: ${data.username}</p><p>Email: ${data.email}</p>`;
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }
  
  // Function to update user profile
  function updateProfile() {
    const updatedProfile = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value
      // Add more fields as needed
    };
  
    fetch('/api/users/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProfile)
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message); // Assuming server responds with a success message
        // Optionally update UI or redirect user
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  }
  
  // Example event listener for updating profile
  document.getElementById('update-profile-btn').addEventListener('click', updateProfile);
  
  // Fetch profile data when the page loads
  document.addEventListener('DOMContentLoaded', fetchUserProfile);
  