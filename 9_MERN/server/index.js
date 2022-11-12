const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://naveeharn:1909802561967Th@cluster0.kgype.mongodb.net/merntutorial?retryWrites=true&w=majority')

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUser', async (req, res) => {
    const newUser = new UserModel(req.body)
    await newUser.save()
    res.json({
        message: `Successfully Create User : ${req.body.name}`,
    })
})

app.listen(4000, () => {
    console.log('Successfully Run SERVER 4000 : ', new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
})