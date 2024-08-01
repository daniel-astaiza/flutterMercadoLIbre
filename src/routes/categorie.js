const express = require("express");
const categorieSchema = require ("../models/categorie");

const router = express.Router()

//Crear Usuario
router.post("/categorie", (req,res)=>{
    const user = categorieSchema(req.body);
    user.save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Buscar usuarios
router.get("/categorie", (req,res)=>{
    categorieSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Encontrar Usuario 
router.get("/categorie/:id", (req,res)=>{
    const {id} = req.params;
    categorieSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Actualizar Usuario
router.put("/categorie/:id", (req,res)=>{
    const {id} = req.params;
    const {name}=req.body
    categorieSchema
    .updateOne({_id: id},{$set:{name}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Eliminar usuario
router.delete("/categorie/:id", (req,res)=>{
    const {id} = req.params;
    categorieSchema
        .deleteOne({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))

})

module.exports = router;