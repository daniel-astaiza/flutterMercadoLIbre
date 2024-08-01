const mongoose = require("mongoose")

const categorieSchema = mongoose.Schema({
    name :{
        type:String,
        require:true
    }   
}
)

module.exports = mongoose.model('Categorias', categorieSchema);
