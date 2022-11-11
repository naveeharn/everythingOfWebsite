const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')

// call product Model
const Product = require('../models/products')

// call multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
})

const uploadFile = multer({
    storage: storage
})

// router.get('/', (req, res) => {
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname, '../templates/index.html'))
// })

// router.get('/product',(req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname,`../templates/product${req.query.id}.html`))
// })

// const name = 'naveeharn'
// const properties = {
//     name: 'naveeharn',
//     ages: '20',
//     address: '<h3>Bangkok - Hatyai</h3>'
// }

let properties = [
    {
        name: 'Macbook',
        price: '2000$',
        image: 'images/products/product1.png'
    },
    {
        name: 'Uniquo T-Shirt',
        price: '120$',
        image: 'images/products/product2.png'
    },
    {
        name: 'Apple Ear-Pod ',
        price: '99$',
        image: 'images/products/product3.png'
    }
]

router.get('/', (req, res) => {
    res.status(200)
    res.type('text/html')
    Product.find().exec((err, document) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                properties: document
            })
        }
    })
    // res.render('index.ejs')
})

// router.get('/product/:id', (req, res) => {
//     if (req.params.id === '1' || req.params.id === '2' || req.params.id === '3') {
//         res.status(200).type('test/html').sendFile(path.join(__dirname, `../templates/product${req.params.id}.html`))
//     } else {
//         res.redirect('/')
//     }
// })

// router.post('/admin', (req, res) => {
//     res.status(200).type('text/html').render('admin')
// })

router.post('/login', (req, res) => {
    console.log(req.cookies);
    if (req.body.username === 'admin' && req.body.password === '123') {
        res.cookie('username', req.body.username, { maxAge: 10000 })
        res.cookie('password', req.body.password, { maxAge: 10000 })
        res.cookie('login_status', true, { maxAge: 10000 })
        res.redirect('/manage')

    } else {
        res.render('404')
    }
})

router.get('/add-product', (req, res) => {
    console.log(req.cookies);
    res.status(200).type('text/html')
    if (req.cookies && req.cookies.login_status) {
        res.render('form')
    } else {
        res.render('admin')
    }
    // res.status(200).type('text/html').render('form')
})

router.get('/manage', (req, res) => {
    console.log(req.cookies);
    res.status(200).type('text/html')
    Product.find().exec((err, document) => {
        if (err) {
            console.log(err);
        } else {
            res.render('manage', {
                properties: document
            })
        }
    })
})

// router.get('/insert',(req,res)=>{
//     console.log(req.query);
// })

// get the document by _id
router.get('/:_id', (req, res) => {
    res.status(200).type('text/html')
    console.log('_id : ', req.params._id);
    Product.findOne({
        _id: req.params._id
    }).exec((err, document) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(document);
            res.render('product', {
                property: document
            })
        }
    })
})

// create new document
router.post('/insert', uploadFile.single("image"), (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    // Product.create(req.body)
    let document = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.file.filename,
        description: req.body.description,
    });
    // console.log(document);
    Product.saveProduct(document, err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/add-product')
        }
    })
    // res.statusMessage('Complete')
})

// delete the document
router.get('/delete/:_id', (req, res) => {
    // console.log(req.params._id);
    res.status(200).type('text/html')
    Product.findByIdAndDelete(req.params._id, {
        useFindAndModify: false
    }).exec(err => {
        if (err) {
            console.log(err);
        }
    })
    res.redirect('/manage')
})

// edit the document 
router.post('/edit', (req, res) => {
    // console.log(req.body.edit_id);
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



module.exports = router