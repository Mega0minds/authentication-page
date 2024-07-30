"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
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
    }
    else {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
