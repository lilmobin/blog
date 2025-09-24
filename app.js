const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const { ErrorHandler, NotFoundError } = require("./util/errorHandler");
dotenv.config();
connectDB();
const authRoutes = require('./routes/auth.routes');
const blogRoutes = require('./routes/blog.routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use(NotFoundError);
app.use(ErrorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});