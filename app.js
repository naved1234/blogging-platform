const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const rateLimiter = require('./middlewares/rateLimiter');
const logger = require('./middlewares/logger');
const swaggerSetup = require('./config/swagger');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(rateLimiter);
app.use(logger());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Swagger documentation
swaggerSetup(app);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
