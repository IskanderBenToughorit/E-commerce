const Order = require('../models/orderModel');

// Obtenir toutes les commandes
const getOrders = async (req, res) => {
    const orders = await Order.find().populate('products.productId');
    res.json(orders);
};

// Passer une commande
const createOrder = async (req, res) => {
    const { products, totalAmount } = req.body;
    const order = new Order({ products, totalAmount });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
};

module.exports = { getOrders, createOrder };
