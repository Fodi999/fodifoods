const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Используйте переменную окружения PORT

// Serve static files
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





