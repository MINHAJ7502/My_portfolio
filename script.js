document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    // Target all reveal elements
    const revealElements = document.querySelectorAll(
        ".reveal-top, .reveal-bottom, .reveal-left, .reveal-right"
    );

    revealElements.forEach((el) => observer.observe(el));
});