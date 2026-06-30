console.log("Pulse Medicare Dashboard Loaded");
window.location.href="dashboard.html";
if(username=="admin" && password=="12345")
window.location.href = "dashboard.html";
<script>
const body = document.body;
const btn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    btn.innerHTML = "☀️ Light Mode";
}

function toggleTheme() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btn.innerHTML = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        btn.innerHTML = "🌙 Dark Mode";
    }
}
</script>
