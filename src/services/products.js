import databaseConnection from "../utils/database"
import Product from "../models/products"

export const listerProducts = async () => {
    await databaseConnection()
    const products = await Product.find()
    return products
}

export const createProduct = async (product) => {
    await databaseConnection()
    const createdProduct = await Product.create(product)
    return createdProduct
}