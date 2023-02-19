const ProductController = require("../controllers/products.controller")

module.exports = app => {
    app.get('/api/allProducts', ProductController.allProducts)
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    app.post('/api/postProduct', ProductController.createProduct)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}