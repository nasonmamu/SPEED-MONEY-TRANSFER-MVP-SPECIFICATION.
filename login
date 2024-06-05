<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Speed Money Transfer</title>
    <link rel="stylesheet" href="/public/styles/style.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="btn-primary">Login</button>
            <div id="login-error" class="error-message"></div>
        </form>
    </div>

    <script>
        const loginForm = document.getElementById('login-form');
        const loginError = document.getElementById('login-error');

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Login failed.');
                }

                const data = await response.json();
                localStorage.setItem('token', data.token);
                loginError.textContent = ''; // Clear any previous errors
                alert('Login successful!');
                window.location.href = '/'; // Redirect to dashboard
            } catch (error) {
                console.error('Error during login:', error);
                loginError.textContent = error.message;
            }
        });
    </script>
</body>
</html>
