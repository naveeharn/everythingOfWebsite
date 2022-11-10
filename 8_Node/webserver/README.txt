
http

http.createServer()
    req
    res

response.write()
response.end()

listen(3000)

npm init
npm init -y
npm install nodemon
npm install express

Template Engine - EJS
npm install ejs

const ejs = require('ejs)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

router.get('/data',(req,res)=>{
    res.render('template name')
})

Database
npm install mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://<hostname:port>/<database>',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

Create Schema & Model
let productSchema = mongoose.Schema({
    name: String,
    price, Number,
    description: String,
    imagePath: String
})

Create Model
let Product = mongoose.model('collection name', productSchema)
module.export = Product

Upload File with Multer
npm install multer
<form class="form-horizontal" enctype="multipart/form-data">
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+.jpg)
    }
})
const upload = multer({
    storage: storage
})
router.post('/insert', upload.single('image'), (req,res)=>{
    image: req.file.filename
})

create new document
router.get('/insert',uploadFile.single("image"),(req,res)=>{
    let document = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description,
    });
    Product.saveProduct(document, err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/addForm')
        }
    })
})

delete the document
router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{
            useFindAndModify: false
        }).exec(err=>{
        if (err) {
            console.log(err)
        } else {
            res.redirect('/manage)
        }
    })
})

// edit the document 
router.post('/edit', (req, res) => {
    Product.findOne({
        _id: req.body.edit_id
    }).exec((err, document) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', {
                property: document
            })
        }
    })
})

// update the document
router.post('/update', (req, res) => {
    Product.findByIdAndUpdate(req.body.update_id,
        {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        },
        {
            userFindAndModify: false
        }
    ).exec(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/manage')
        }
    })
})

Cookie

npm install cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())
res.cookie("cookie_name", "value", maxAge:1000(millisec))
console.log(req.cookie.<cookie_name>)
res.clearCookie('cookie_name')