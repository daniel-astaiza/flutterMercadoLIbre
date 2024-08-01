const express = require("express");
const productsSchema = require ("../models/products");

const router = express.Router()

//Crear Usuario
router.post("/products", (req,res)=>{
    const user = productsSchema(req.body);
    user.save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Buscar usuarios
router.get("/products", (req,res)=>{
    productsSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Encontrar Usuario 
router.get("/products/:id", (req,res)=>{
    const {id} = req.params;
    productsSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Actualizar Usuario
router.put("/products/:id", (req,res)=>{
    const {id} = req.params;
    const {name,description,price}=req.body
    productsSchema
    .updateOne({_id: id},{$set:{name,description,price}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Eliminar usuario
router.delete("/products/:id", (req,res)=>{
    const {id} = req.params;
    productsSchema
        .deleteOne({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))

})

module.exports = router;