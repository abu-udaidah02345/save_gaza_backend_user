
// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/database');
const dotenv = require('dotenv');
const videoRoutes=require("./routes/videoRoutes");
const menuListRoutes=require("./routes/menuListRoutes");
const paymentRoutes=require("./routes/paymentRoutes");
const messegeRoutes=require("./routes/contactUsRoutes");
const contentRoutes=require("./routes/contentRoutes");

dotenv.config(); // Load environment variab

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(dbConfig.url).then(()=>{
  console.log("rahim")
}).catch((error)=>{
  console.log(error,"reeos is here");

});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Routes
app.use('/api/users', menuListRoutes);

app.use('/api/users',videoRoutes);


app.use('/api/users',messegeRoutes)

app.use('/api/users', paymentRoutes);

app.use("/api/users",contentRoutes)







// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
