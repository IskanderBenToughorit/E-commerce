const Product = require('../models/productmodel');

// Obtenir tous les produits
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Ajouter un nouveau produit
const addProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const product = new Product({ name, description, price, stock });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
};

// Mettre à jour un produit
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct);
};

// Supprimer un produit
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Produit supprimé' });
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
