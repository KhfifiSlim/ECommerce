const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', require('./routes/user'));
app.use('/product', require('./routes/product'));
app.use('/category', require('./routes/category'));
app.use('/avis', require('./routes/avis'));

app.listen(port, () => console.log(`Server started on port ${port}`));
