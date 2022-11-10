const mongoose = require('mongoose')

// connect MongoDB
const dbURL = 'mongodb://'+'localhost:27017'+'/productDB'
mongoose.connect(dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>{
    console.log(err);
})

// design Schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String
})

// create Model
let Product = mongoose.model('products', productSchema)

// export Model
module.exports = Product

// design save data function
module.exports.saveProduct = function (model, document) {
    model.save(document)
}