import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Set the public directory as a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON requests
app.use(express.json());

// Store tasks in an array
const tasks = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST requests
// Handle POST requests
// Handle POST requests
app.post('/submit', (req, res) => {
    console.log("POST request received");
    
    const { task } = req.body;

    if (task) {
        tasks.push(task);
        console.log("Task added:", task);
        console.log("Current tasks:", tasks);
    }

    res.sendStatus(200); // Respond with a status code
});



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
