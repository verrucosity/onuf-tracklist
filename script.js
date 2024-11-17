// Initialize GSAP Animations
gsap.from(".side", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    stagger: 0.3
});

// Initialize Particles.js with spacy configurations
particlesJS("particle-background", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": { "value": "#ffffff" },
        "shape": { "type": "star" },
        "opacity": { "value": 0.7, "random": true },
        "size": { "value": 2, "random": true },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }
        }
    },
    "retina_detect": true
});

// Track Descriptions
const trackDescriptions = {
    "templarfrvr": `"templarfrvr" description here...`,
    "toumei (w/ Malakinesis)": `"toumei" description here...`
};

// Modal Functionality
document.querySelectorAll(".tracklist .side ul li").forEach(track => {
    track.addEventListener("click", () => {
        const name = track.innerText.trim();
        modal.innerText = trackDescriptions[name];
    });
});
