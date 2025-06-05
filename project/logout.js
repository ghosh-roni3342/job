document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Clear any stored session or auth data
      localStorage.clear();
      sessionStorage.clear();

      // Alert the user
      alert("You have been logged out.");

      // Redirect to the login page
      window.location.href = "login.html"; // Ensure this file exists
    });
  }
});
