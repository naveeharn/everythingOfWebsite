const express = require('express')
const router = express.Router()
const path = require('path')

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

router.get('/', (req, res) => {
    // const name = 'naveeharn'
    // const properties = {
    //     name: 'naveeharn',
    //     ages: '20',
    //     address: '<h3>Bangkok - Hatyai</h3>'
    // }
    const properties = [
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
    res.status(200)
    res.type('text/html')
    res.render('index', {
        properties:properties
    })
    // res.render('index.ejs')
})

router.get('/product/:id', (req, res) => {
    if (req.params.id === '1' || req.params.id === '2' || req.params.id === '3') {
        res.status(200).type('test/html').sendFile(path.join(__dirname, `../templates/product${req.params.id}.html`))
    } else {
        res.redirect('/')
    }
})



module.exports = router