const Product= require('../models/products.model')


module.exports = {
    //Key value pairs
    //Keys are the names of the functions and values are the functions
    allProducts:(req,res) => {
        Product.find({})
            .then((allProducts) => {
                res.json(allProducts)
            })
            .catch((err)=> {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    getOneProduct: (req,res)=>{
        Product.findOne({_id:req.params.id})
            .then((oneProduct)=> {
                res.json(oneProduct)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    createProduct:(req,res) => {
        Product.create(req.body)
            .then((newProduct)=>{
                res.json(newProduct)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    updateProduct:(req,res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct=> {
                res.json({ product: updatedProduct})
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    deleteProduct:(req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
}