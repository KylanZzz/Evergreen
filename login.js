function loginUser() {
            // Simple validation (you can replace this with your authentication logic)
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Replace the following condition with your authentication logic
            if (username === 'yourUsername' && password === 'yourPassword') {
                // Redirect to another page (replace 'redirect.html' with your desired page)
                window.location.href = 'logs.html';
                return false; // Prevent the form from submitting
            } else {
                // Display an error message (you can customize this part)
                alert('Invalid username or password');
                return false; // Prevent the form from submitting
            }
        }