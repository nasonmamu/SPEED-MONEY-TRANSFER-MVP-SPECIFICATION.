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
function updateProfile(e) {
  e.preventDefault(); // Prevent form submission
  
  const updatedProfile = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value
    // Add more fields as needed
  };

  const formData = new FormData();
  formData.append('username', updatedProfile.username);
  formData.append('email', updatedProfile.email);
  const profilePictureInput = document.getElementById('profilePicture');
  if (profilePictureInput.files.length > 0) {
    formData.append('profilePicture', profilePictureInput.files[0]);
  }

  fetch('/api/users/profile', {
    method: 'PUT',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message); // Assuming server responds with a success message
      // Optionally update UI or redirect user
      fetchUserProfile(); // Refresh profile data after update
    })
    .catch(error => {
      console.error('Error updating profile:', error);
    });
}

// Example event listener for updating profile
document.getElementById('updateProfileForm').addEventListener('submit', updateProfile);

// Fetch profile data when the page loads
document.addEventListener('DOMContentLoaded', fetchUserProfile);
