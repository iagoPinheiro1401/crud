import express from 'express'
import productsController from "./controllers/products"

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})

app.use('/products', productsController)
