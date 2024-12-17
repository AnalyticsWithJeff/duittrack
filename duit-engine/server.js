import express from 'express';
import path from 'path';
import users from './routes/users.js';

const port = process.env.PORT || 8000;

const app = express();

// Routes
app.use('/api/users', users);

app.listen(port, () => console.log(`Server is running on port ${port}`));