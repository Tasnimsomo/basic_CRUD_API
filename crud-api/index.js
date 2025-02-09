const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API server updated");
});

// routes
app.use('/api/products', productRoute);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database!");
})
.catch((error) => {
    console.log("Connection failed!", error.message);
});