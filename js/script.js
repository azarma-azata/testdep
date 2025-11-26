// fade in on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

// Konami code
const dialog = document.getElementById("dialog");
const code = ["ArrowUp","ArrowUp","ArrowDown", "ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB", "KeyQ"]
let input_code = []
document.addEventListener("keydown", (event) => {
    input_code.push(event.code)
    if (input_code.lenght === code.length || JSON.stringify(input_code) === JSON.stringify(code)){
        dialog.open = true
        removeEventListener("keydown", document)
    }
})