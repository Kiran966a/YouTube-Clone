const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define routes
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes'); 
const commentRoutes = require('./routes/commentRoutes'); 
const channelRoutes = require('./routes/channelRoutes'); 

// Use routes
app.use('/api/auth', authRoutes);  
app.use('/api/videos', videoRoutes); 
app.use('/api/comments', commentRoutes); 
app.use('/api/channels', channelRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
