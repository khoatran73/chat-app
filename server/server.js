const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(process.env.mongodb || "mongodb+srv://khoa732001:Yeubang3000@cluster0.qe1nv.mongodb.net/chat-app?retryWrites=true&w=majority")
        console.log('connect to MongoDB successfully')
    }
    catch (err) {
        console.log("connection to MongoDB failed")
        console.log(err)
    }
}

module.exports = { connect }
