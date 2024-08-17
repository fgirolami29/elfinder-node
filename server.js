// server.js
const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');

// Import the elFinder middleware
const fileManagerConnector = require('./middlewares/elfinder');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (elFinder client)
app.use('/', express.static(resolve(__dirname, 'public')));

// Use the elFinder middleware
app.use('/connector', fileManagerConnector);
app.get('/fm', function (req, res) {
    res.sendFile(resolve(__dirname, './index.html'));
});
// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
