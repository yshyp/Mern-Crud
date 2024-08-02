const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/ItemRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/items', itemRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
