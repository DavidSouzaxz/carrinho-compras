const cartModel = require('../models/cart.model')

exports.getAll = async (req, res) => {
  const cart = await cartModel.getCart()
  res.json(cart)
}

exports.add = async (req, res) => {
  const { name, price, quantity } = req.body
  if (!name || !price || !quantity) {
    return res.status(400).json({ error: 'Nome, preço e quantidade são obrigatórios.' })
  }

  const newItem = await cartModel.addItem({ name, price, quantity })
  res.status(201).json(newItem)
}

exports.remove = async (req, res) => {
  const { id } = req.params
  const removed = await cartModel.removeItem(id)
  if (!removed) {
    return res.status(400).json({
      error: 'Id não existe'
    })
  }

  res.json({ 'Item removido': removed })
}


exports.clear = async (_req, res) => {
  await cartModel.clearCart();
  res.json({ message: 'Carrinho esvaziado com sucesso' });
};

exports.total = async (_req, res) => {
  const total = await cartModel.getTotal();
  res.json({ total });
};