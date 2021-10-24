const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(process.env.mongodb)
        console.log('connect successfully')
    }
    catch (err) {
        console.log("connection failed")
    }
}

module.exports = { connect }
