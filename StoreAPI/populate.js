const jsonProducts = require('./products.json')
require('dotenv').config()
const connectDB = require('./db/connect')
const product = require('./models/product')

const db = process.env.MONGO_URL
const start = async()=>{
    await connectDB(db)
    await product.deleteMany()
    await product.create(jsonProducts)
    console.log(`success`)
}
start()



