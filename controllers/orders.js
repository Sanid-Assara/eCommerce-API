import Order from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const orders = await Order.findAll();
    if (!isNaN(limit) && limit > 0) {
      res.json(orders.slice(0, limit));
    } else {
      res.json(orders);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      body: { userId, products, total },
    } = req;
    if (!userId || !products || !total)
      return res.status(400).json({ error: "All field are required" });
    const result = await Order.create(req.body);
    res.status(200).json({ message: "Order created", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Order.findByPk(id);
    if (!result) return res.status(404).json({ error: "Order not found" });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const {
      body: { userId, products, total },
      params: { id },
    } = req;
    if (!userId || !products || !total)
      return res.status(400).json({
        error: "All field are required",
      });
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Order.findByPk(id);
    if (!user) return res.status(404).json({ error: "Order not found" });
    await user.destroy();
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
