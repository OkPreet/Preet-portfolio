// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Initialize Particles.js when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#777" },
      shape: { type: "line" },
      opacity: { value: 0.3 },
      size: { value: 1.2 },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#777",
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.25,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
      },
    },
    retina_detect: true,
  });
});
