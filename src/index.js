const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user")
const categorieRoutes = require("./routes/categorie")
const productsRoutes = require("./routes/products")

const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// middlewre
app.use(cors());
app.use(express.json())

app.use("/api",userRoutes);
app.use("/api",categorieRoutes);
app.use("/api",productsRoutes);



// routes

app.get ("/",(req, res) => {
    res.send("¡Bienvenidos!")
});

//mongodb conection

mongoose.connect(
    process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDB Atlas"))
    .catch((error)=>console.error(error))

app.listen(port, () => console.log ("server listening on port", port));