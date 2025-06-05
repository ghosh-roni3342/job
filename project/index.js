
if (localStorage.getItem('loggedIn') !== 'true') {
  alert('Please login first!');
  window.location.href = 'login.html';
}

document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.setItem('loggedIn', 'false');
  window.location.href = 'login.html';
});

