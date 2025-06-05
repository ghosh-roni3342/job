document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  if (!username || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Save user data (only one user for demo)
  localStorage.setItem('user', JSON.stringify({ username, password }));

  alert('Registered successfully. Please login.');
  window.location.href = 'login.html';
});
