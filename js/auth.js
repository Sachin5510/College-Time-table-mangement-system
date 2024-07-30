document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple validation and authentication logic
    if (username === 'admin' && password === 'admin123') {
        alert('Admin logged in');
        // Redirect or show admin features
    } else if (username === 'faculty' && password === 'faculty123') {
        alert('Faculty logged in');
        // Redirect or show faculty features
    } else if (username === 'student' && password === 'student123') {
        alert('Student logged in');
        // Redirect or show student features
    } else {
        alert('Invalid credentials');
    }
});
