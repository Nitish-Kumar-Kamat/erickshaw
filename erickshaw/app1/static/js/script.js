const canvas = document.createElement('canvas');
document.querySelector('.background').appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 200;

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize Particles
function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Animate Particles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Resize Event
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    init();
});

// Start Animation
init();
animate();

/* Dropdown Functionality */
document.getElementById('series').addEventListener('click', function() {
    document.querySelector('.dropdown-options').classList.toggle('show');
});

document.querySelectorAll('.dropdown-options div').forEach(option => {
    option.addEventListener('click', function() {
        document.getElementById('series').value = this.textContent;
        document.querySelector('.dropdown-options').classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let rickshaw = document.querySelector(".rickshaw");
 
    function moveRickshaw() {
        rickshaw.style.animation = "moveRickshaw 6s linear infinite";
    }

    moveRickshaw();
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script Loaded Successfully!");

    // ✅ Check if message element exists
    const messageBox = document.getElementById("message");
    if (!messageBox) {
        console.error("⚠️ Error: #message element not found!");
        return;
    }
    
   