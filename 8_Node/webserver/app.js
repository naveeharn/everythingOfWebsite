/*
const http = require('http')
const fs = require('fs')
const url = require('url')

// const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`,'utf-8')
// const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`,'utf-8')

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8')
let productPage = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')

const server = http.createServer(function (req, res) {
    const pathName = req.url
    
    const myHTML = `
        <h1>Hello Node.js</h1>
        <p style="color:white; background:grey; text-align:center">Yo W T F</p>
        `
    
    console.log(url.parse(req.url,true));
    const {pathname, query} = url.parse(req.url, true)
    console.log(pathname, query.id);

    // res.write(myHTML)
    if (pathname === '/' || pathname === '/home') {
        res.end(indexPage)
    } else if (pathname === '/product') {
        if (query.id === "1") {
            productPage = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
        } else if (query.id === "2") {
            productPage = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
        } else if (query.id === "3") {
            productPage = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')
        }
        res.end(productPage)
    } else {
        res.writeHead(404)
        res.end(`<h1>Not Found</h1>`)
    }
})
// .listen(3000, ()=>{
//     console.log('start server in port 3000');
// })

server.listen(3000, 'localhost', () => {
    console.log('start server in port 3000');
})
*/

// console.log('= = = = = = = = = = = = = = = ');

/*
const express = require('express')
const path = require('path')

const app = express()

const indexPage = path.join(__dirname,'templates/index.html')
// const product1_Page = path.join(__dirname,'templates/product1.html')
const productPage = index => {
    return path.join(__dirname,`templates/product${index}.html`)
}

app.get('/',(req,res)=>{
    // const pathName
    // console.log(pathName);

    res.type('text/html')
    res.sendFile(indexPage)
    res.status(200)
})

app.get('/product',(req,res)=>{
    // console.log(req.query);
    res.type('text/html')
    res.sendFile(productPage(req.query.id))
    res.status(200)
})

app.listen(3000,() => {
    console.log('port 3000');
})
*/

// console.log('= = = = = = = = = = = = = = = ');

const express = require('express')
const path = require('path')
// const router = express.Router()
const router = require('./routes/routers')
const cookieParser = require('cookie-parser')

const app = express()

// const indexPage = path.join(__dirname,'templates/index.html')
// const productPage = index =>{
//     return path.join(__dirname,`templates/product${index}.html`)
// }

// router.get('/', (req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(indexPage)
// })

// router.get('/product', (req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(productPage(req.query.id))
// })

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({
    extended: false
}))

app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.use(cookieParser())

// app.get('',(req,res)=>{
//     console.log(req.query);
// })


app.listen(3000,()=>{
    console.log('port : 3000 |',new Date().toUTCString());
})