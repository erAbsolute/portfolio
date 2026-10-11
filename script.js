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

// Copy email to clipboard
const copyEmailBtn = document.getElementById('copy-email');
const EMAIL = 'alejandro@perezrubio.dev';

copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyEmailBtn.textContent = 'Email';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = EMAIL;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyEmailBtn.textContent = 'Email';
        }, 2000);
    });
});
