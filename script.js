// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
    links.classList.toggle('is-open');
});

// Close menu when a link is clicked
links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.remove('is-open');
    });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
