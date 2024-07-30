import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock user data
const mockUser = {
    email: 'user@example.com',
    password: 'password123'
};

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === mockUser.email && password === mockUser.password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
