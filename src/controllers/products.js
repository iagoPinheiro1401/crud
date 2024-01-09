import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {
    res.send('GET PRODUCTS')
})

router.post('/', (req, res) => {
    res.send('POST PRODUCTS')
})

router.delete('/', (req, res) => {
    res.send('DELETE PRODUCTS')
})

export default router