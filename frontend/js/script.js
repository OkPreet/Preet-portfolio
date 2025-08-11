// ====== Initialize AOS (Animate On Scroll) ======
AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animate only once when scrolled into view
    offset: 100     // trigger point before the element comes into view
});

// ====== Initialize Particles.js for Line Animation Background ======
particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "line", // shapes: "circle", "edge", "triangle", "polygon", "star", "line"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 1,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.7 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
