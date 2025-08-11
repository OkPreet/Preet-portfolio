// Initialize Particles.js and set up hamburger toggle after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js
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

  <script>
  document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
</script>

});
