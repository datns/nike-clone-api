const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://datns:${process.env.PASSWORD_MONGO}@nikeclone.tfvqwoc.mongodb.net/`

const client = new MongoClient(uri);

const database = client.db('nike-clone')
const products = database.collection('products')
const orders = database.collection('orders')

module.exports = {
    products,
    orders
}
