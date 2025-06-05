document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.username === username && user.password === password) {
    localStorage.setItem('loggedIn', 'true');
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
