// Reveal on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
});

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});
