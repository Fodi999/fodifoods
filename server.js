const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обслуживания статических файлов из каталога "assets"
app.use(express.static(path.join(__dirname, 'assets')));

// Основной маршрут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

// Маршрутизатор для статей
const articleRouter = express.Router();

articleRouter.get('/article1.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'article1.html'));
});

// Добавьте маршруты для других статей по аналогии
// articleRouter.get('/article2.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'assets', 'article2.html'));
// });

// Использование маршрутизатора для путей, начинающихся с "/articles"
app.use('/articles', articleRouter);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});










