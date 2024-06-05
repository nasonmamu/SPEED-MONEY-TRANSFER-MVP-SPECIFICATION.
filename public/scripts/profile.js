document.addEventListener('DOMContentLoaded', async () => {
  const profileInfo = document.getElementById('profile-info');
  const updateProfileForm = document.getElementById('update-profile-form');
  const profileError = document.getElementById('profile-error');

  try {
      const response = await fetch('/api/users/profile', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const userData = await response.json();
      
      //check if the userData returned from the server is null or undefined
      if(!userData){
          profileInfo.innerHTML = `<p>Error fetching Profile!</p>`;
      }else{
      profileInfo.innerHTML = `
          <p>Username: ${userData.username}</p>
          <p>Email: ${userData.email}</p>
          ${userData.profilePicture ? `<img src="/uploads/${userData.profilePicture}" alt="Profile Picture" class="profile-pic">` : ''}
      `;

      // Populate the form fields with the user data
      updateProfileForm.username.value = userData.username;
      updateProfileForm.email.value = userData.email;
      }

  } catch (error) {
      console.error('Error fetching profile:', error);
      profileInfo.innerHTML = `<p>Error fetching Profile!</p>`;
  }

  updateProfileForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(updateProfileForm);

      try {
          const response = await fetch('/api/users/profile', {
              method: 'PUT',
              body: formData,
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
              }
          });
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

          const data = await response.json();
          profileError.textContent = '';
          alert(data.message);
          // Refresh the profile after successful update
          fetchUserProfile(); 
      } catch (error) {
          console.error('Error updating profile:', error);
          profileError.textContent = error.message;
      }
  });
});
