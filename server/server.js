const path = require('path');
const express = require('express');
const app = express();
const publicPath =  path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// match all not defined routes
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start local server on port 3000
app.listen(port, () => {
    console.log('Server is up!');
});