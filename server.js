import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import { connectDB } from './connection.js'; 

const app = express();
const PORT = 5000;
app.use(cors());

app.get('/', (req, res) => {
    connectDB();
    res.json({ message: 'Hello from Node.js Backend!' })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
