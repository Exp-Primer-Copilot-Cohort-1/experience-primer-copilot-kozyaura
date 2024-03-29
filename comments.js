const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    // Handle incoming requests here
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});