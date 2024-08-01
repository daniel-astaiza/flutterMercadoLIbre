const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        required:true
    }
}
)

module.exports = mongoose.model('Productos', productsSchema);
