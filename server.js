const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Настройка статической папки
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




