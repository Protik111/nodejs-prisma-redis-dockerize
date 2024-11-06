const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

//create order
router.post("/create", async (req, res) => {
    try {
        const order = new Order(req.body);
        order.save();
        res.status(201).json({
            message: "Order is created"
        })
    } catch (error) {
        res.status(500).json({
            message: "Order failed"
        })
        console.log('Error occurred', error);
    }

})

router.get('/get', async (req, res) => {
    try {

        const orders = await Order.find();
        res.status(200).send(orders)

    } catch (error) {
        res.status(500).json({
            message: "Order failed"
        })
        console.log('Error occurred', error);
    }
})

//delete by id
router.delete('/delete/:orderId', async (req, res) => {
    const orderId = req.params.orderId;
    console.log('orderId', orderId);
    try {
        await Order.deleteOne({ _id: orderId })
        res.status(200).json({
            message: "Order is deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Order failed"
        })
        console.log('Error occurred', error);
    }
})

module.exports = router;