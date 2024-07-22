document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.href.startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
        } else {
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
        }
    });

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
});






