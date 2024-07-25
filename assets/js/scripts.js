document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');

    // Проверка и применение сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
        }
    } else {
        document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
});









