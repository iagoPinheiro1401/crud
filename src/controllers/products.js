import { Router } from "express"

import { listerProducts, createProduct } from "../services/products"

const router = Router()

router.get('/', async (req, res) => {
    const productList = await listerProducts()
    res.send(productList)
})

router.post('/', async (req, res) => {
    const product = await createProduct(req.body)
    res.status(201).send('POST PRODUCTS')
})

router.delete('/', (req, res) => {
    res.send('DELETE PRODUCTS')
})

export default router