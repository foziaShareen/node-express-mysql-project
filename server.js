const express = require('express');
const app = express();
const PORT = 8080;
app.get('/test', (req, res) => {
    res.send('<h1>Test</h1>');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});