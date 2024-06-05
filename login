<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - Speed Money Transfer</title>
    <link rel="stylesheet" href="/public/styles/style.css">
</head>
<body>
    <div class="dashboard-container">
        <aside class="sidebar">
            <h2>Dashboard Menu</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/transaction">Transactions</a></li>
                <li><a href="/profile" class="active">Profile</a></li>
                <li><a href="#" id="logout-link">Logout</a></li> 
            </ul>
        </aside>

        <main class="main-content">
            <h2>Profile</h2>
            <div id="profile-info">
                </div>
            <form id="update-profile-form" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="profilePicture">Profile Picture:</label>
                    <input type="file" id="profilePicture" name="profilePicture">
                </div>
                <button type="submit" class="btn-primary">Update Profile</button>
                <div id="profile-error" class="error-message"></div>
            </form>
        </main>
    </div>
   <script src="/public/scripts/profile.js"></script>
    <script>
        document.getElementById('logout-link').addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.href = '/login';
        });
    </script>
</body>
</html>
