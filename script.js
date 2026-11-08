const openBtn = document.getElementById('open-btn');
const introScreen = document.getElementById('intro-screen');
const mainContent = document.getElementById('main-content');
const bgOverlay = document.getElementById('bg-overlay');
const polaroidImages = document.querySelectorAll('.modern-polaroid img');

// INTRO LOGIC
openBtn.addEventListener('click', function() {
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1000); 
});

// BACKGROUND CHANGER LOGIC
polaroidImages.forEach(img => {
    img.addEventListener('click', function() {
        const imageSource = this.src;
        bgOverlay.style.backgroundImage = `url('${imageSource}')`;
        bgOverlay.style.opacity = '1';
    });
});

// CUPID'S ARROW GAME LOGIC
const gameArea = document.getElementById('game-area');
const scoreSpan = document.getElementById('score');
const surpriseContainer = document.getElementById('surprise-container');
let score = 0;
const totalHearts = 10;

function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('target-heart');
    heart.innerHTML = '❤️';

    const randomX = Math.floor(Math.random() * 70) + 10;
    const randomY = Math.floor(Math.random() * 150) + 40;

    heart.style.left = `${randomX}%`;
    heart.style.top = `${randomY}px`;

    const moveDuration = (Math.random() * 2) + 1.2;
    heart.style.animationDuration = `${moveDuration}s`;

    heart.addEventListener('click', function() {
        this.remove();
        score++;
        scoreSpan.innerText = score;

        if (score === totalHearts) {
            setTimeout(() => {
                gameArea.style.display = 'none';
                surpriseContainer.classList.remove('hidden');
            }, 300);
        }
    });

    gameArea.appendChild(heart);
}

// I-spawn ang 10 puso
for (let i = 0; i < totalHearts; i++) {
    spawnHeart();
}