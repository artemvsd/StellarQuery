let canvas = document.getElementById('particles');
let ctx = canvas.getContext('2d');

let particles = 150;
let particlesArray = [];


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


function Particle() {
    this.px = Math.round(Math.random() * canvas.width);
    this.positionY = Math.round(Math.random() * canvas.height);
    this.speedX = Math.round(Math.random() * 1 + 1);
    this.speedY = Math.floor(Math.random() * 1 + 1 );
    this.size = Math.round(Math.random() * 0.8 + 1);
}

for (let i = 0; i < particles; i++) {
    particlesArray.push(new Particle);
}

function drawParticle() {
    console.log('Numero de Particulas: ' + particlesArray.length);

    ctx.fillStyle = '#010723';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.beginPath();
    particlesArray.forEach(particle => {
        ctx.arc(particle.px, particle.positionY, particle.size, 0, Math.PI * 2, true);


        particle.px += particle.speedX;
        particle.positionY += particle.speedY;
        if (particle.px > canvas.width) {
            particle.px = 0;
        }
        if (particle.positionY > canvas.height) {
            particle.positionY = 0;
        }
        ctx.closePath();
    });
    ctx.fill();
    requestAnimationFrame(drawParticle)
}



drawParticle();

