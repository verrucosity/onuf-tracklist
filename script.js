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
    "i don't believe i can": `"i don't believe i can" was created in late 2019 during my lowest point—a time when I felt completely defeated. This was my first real attempt at channeling everything I was feeling—raw, unfiltered emotion—into something intangible: music. That is where the idea of wanting forever was born, although I had no idea it would be a four-year-long journey. I decided not to further polish or mix the track because its imperfections tell a story. They're where the moment's authenticity is captured, a snapshot of vulnerability frozen in sound.

    This song is the birth of a journey that takes one closer to the concept of forever—striving for something that's lasting, meaningful, and true. Forever doesn't happen overnight, but with every step—so imperfect—it brings you closer.`,
    "ksarafrvr": `"ksarafrvr" is a song produced for someone who started as my Japanese tutor who became one of my closest friends: Ksara. She let me, with great grace, dedicate this piece to her, and I couldn't think of any other person who would be more worthy. Ksara is such an amazing person who has been and always will be a great inspiration in my life. Her kindness, wisdom, and strong support have marked my life, and nothing will ever be able to take that away.

    I am forever proud of her and all that she has achieved, and she will always be an inspiration to me. No matter where life would take her, whatever path in life she gets on, I will forever wish the best for her. Ksara will always be part of my story and my concept of forever. This song is my way of saying thank you for everything she's done and for simply being who she is.`,
    "vi": `"vi" started in 2021 and has the record so far for the longest time on one track for this album. It was my first introduction to a lofi-esque style of music, and though the process started with excitement, it quickly became a test of resilience. Just after completing the first 8 bars, my hard drives crashed—wiped. The loss was devastating, and coupled with a rough patch in my personal life, I just lost all motivation even to touch the genre again.

    But something shifted this year. I decided to start fresh and rebuild the song from scratch, channeling everything that I have learned and felt in those years since its initial creation. "Vi" became a testament to the will of perseverance, proof that even when everything feels lost, again it is possible. Sometimes, the most meaningful things come from a place of struggle. This track is just proof that no matter how long it takes, just as long as you keep moving forward, you'll finish the journey.`,
    "moonlovecrescent": `"moonlovecrescent" is for my best friend, Lucky, who will always be a part of my forever. Lucky and I have struggled together in so many moments—good, bad, and all the growing pains. We have seen each other grow into these people that only a select few can witness. He's one of my favorite people in this world, someone whom I really admire and cherish.

    This track represents that bond we share in silence—the kind that is beyond words and has been built on years of trust and understanding. Just like the phases of the moon, sometimes life is up, and sometimes it's down, but Lucky has always been someone I look up to. Wherever life may take him, I promise to be there for him as he has always been there for me.`,
    "lose my breath": `"lose my breath" captures a feeling of being overwhelmed, where every breath seems heavier and the world is just a little too much to take in. The sample's eerie refrain, "I lose my breath or what I have left, I lose my sleep and it don't make sense," was the blueprint for the track, conjuring images of nights of restless man versus mind.

    The spacey, ambient production and delicate harmonies represent the duality of chaos and calm, a reminder that even in moments of suffocation, there’s a quiet beauty in simply feeling. This song isn’t just about losing your breath; it’s about finding yourself in the spaces between, where the noise fades, and you’re left with your truest emotions.

    "lose my breath" was born out of introspection: through the weight we bear and the strength to move forward when it seems impossible to do so.`,
    "SOUL (w/ Yung Skrrt)": `"SOUL," "DT," and "LOVE" were made with Yung Skrrt—a person I met and instantly knew was one of the hardest workers I've ever had the pleasure of knowing, a musical genius, a brother, and a man who deserves all the flowers he can get. These tracks bring a quicker-paced, high-energy vibe to the B side of the album, standing out with their dynamic and electric presence.

    Skrrt handled the drums while I crafted the melodies; it was a collaboration that felt like magic. These melodies were born during one of the most crucial parts of my life—right after college when I rediscovered my love for music. It's so dope how Skrrt took what I had envisioned and brought it to life, transforming these ideas into something greater than I could've imagined. These tracks are proof of what happens when people come together, collaborate, and find that love for creation once more.`,
    "DT (w/ Yung Skrrt)": `"SOUL," "DT," and "LOVE" were made with Yung Skrrt—a person I met and instantly knew was one of the hardest workers I've ever had the pleasure of knowing, a musical genius, a brother, and a man who deserves all the flowers he can get. These tracks bring a quicker-paced, high-energy vibe to the B side of the album, standing out with their dynamic and electric presence.

    Skrrt handled the drums while I crafted the melodies; it was a collaboration that felt like magic. These melodies were born during one of the most crucial parts of my life—right after college when I rediscovered my love for music. It's so dope how Skrrt took what I had envisioned and brought it to life, transforming these ideas into something greater than I could've imagined. These tracks are proof of what happens when people come together, collaborate, and find that love for creation once more.`,
    "LOVE (w/ Yung Skrrt)": `"SOUL," "DT," and "LOVE" were made with Yung Skrrt—a person I met and instantly knew was one of the hardest workers I've ever had the pleasure of knowing, a musical genius, a brother, and a man who deserves all the flowers he can get. These tracks bring a quicker-paced, high-energy vibe to the B side of the album, standing out with their dynamic and electric presence.

    Skrrt handled the drums while I crafted the melodies; it was a collaboration that felt like magic. These melodies were born during one of the most crucial parts of my life—right after college when I rediscovered my love for music. It's so dope how Skrrt took what I had envisioned and brought it to life, transforming these ideas into something greater than I could've imagined. These tracks are proof of what happens when people come together, collaborate, and find that love for creation once more.`
};

// Modal Functionality
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-description");
const closeModalButton = document.getElementById("close-modal");

document.querySelectorAll(".tracklist .side ul li").forEach(track => {
    track.addEventListener("click", () => {
        const trackName = track.textContent.trim();
        modalText.textContent = trackDescriptions[trackName] || "No description available.";
        modal.style.display = "flex";  // Show the modal on track click
    });
});

// Close Modal
closeModalButton.onclick = () => {
    modal.style.display = "none";
};
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
