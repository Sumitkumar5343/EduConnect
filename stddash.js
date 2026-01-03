// Smooth progress bar animation
window.addEventListener('load', function () {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
    loadPage('dashboard');
});

// Menu interaction
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-4px) scale(1)';
    });
});

// Notification dots animation
document.querySelectorAll('.notification-dot').forEach((dot, index) => {
    dot.style.animationDelay = `${index * 0.2}s`;
    dot.style.animation = 'pulse 2s infinite';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Add pulse animation for notification dots
const style = document.createElement('style');
style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.7; transform: scale(1.2); }
            }
        `;
document.head.appendChild(style);
function loadPage(page) {
    let file;

    switch (page) {
        case 'dashboard':
            file = 'dashcont.html';
            break;
        case 'learnmod':
            file = 'learnmod.html';
            break;
        case 'quizzes':
            file = 'quiz.html';
            break;
        default:
            file = '404.html';
    }

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(error => {
            document.getElementById('main-content').innerHTML = '<p>Error loading page.</p>';
            console.error(error);
        });
}

  function createFloatingElements() {
            const container = document.getElementById('floatingElements');
            for (let i = 0; i < 20; i++) {
                const element = document.createElement('div');
                element.className = 'floating-element';
                element.style.left = Math.random() * 100 + '%';
                element.style.animationDelay = Math.random() * 6 + 's';
                element.style.animationDuration = (Math.random() * 3 + 4) + 's';
                container.appendChild(element);
            }
        }
