const http = require("http");
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'GET' && req.url === '/api/manifest.json') {
        const filePath = path.join(__dirname, 'manifest.json');

        // Log the file path being served
        console.log(`Serving file from: ${filePath}`);

        // Read the file asynchronously
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.statusCode = 500;
                res.end('Internal Server Error');
                return;
            }
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
