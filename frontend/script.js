// Apply theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById('darkModeToggle').checked = true;
}

// Toggle dark/light mode and store preference
document.getElementById('darkModeToggle').addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Simple mock validation (replace with real auth logic later)
    if (username && password) {
      alert("Login successful!");
      window.location.href = "index.html"; // redirect to homepage
    } else {
      alert("Invalid credentials!");
    }
  });
});
