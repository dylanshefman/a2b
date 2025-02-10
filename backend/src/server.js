import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration: allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse incoming JSON data
app.use(express.json());

// Define the routes
app.use('/api', routes);

// Default route for root
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Handle 404 - Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Handle errors globally
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
