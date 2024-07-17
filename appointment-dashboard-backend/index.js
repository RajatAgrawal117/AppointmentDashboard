const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());
const corsOptions = {
    origin: "https://appointment-dashboard-six.vercel.app/", // Replace with your frontend URL
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const appointmentRoutes = require('./routes/appointments');
app.use('/api', appointmentRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
