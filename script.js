const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    const isDark = document.documentElement.toggleAttribute("data-theme");
    toggle.textContent = isDark ? "☀️" : "🌙";
});
