const { read, write } = require('../utils/fileStore');
const crypto = require('crypto');

async function getCart() {
  const data = await read();
  return data.cart;
}

async function addItem(item) {
  const data = await read();
  const newItem = { id: crypto.randomUUID(), ...item };
  data.cart.push(newItem);
  await write(data);
  return newItem;
}

async function removeItem(id) {
  const data = await read();
  const index = data.cart.findIndex(item => item.id === id);
  if (index === -1) return null;
  const removed = data.cart.splice(index, 1)[0];
  await write(data);
  return removed;
}

async function clearCart() {
  const data = await read();
  data.cart = [];
  await write(data);
}

async function getTotal() {
  const cart = await getCart();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

module.exports = {
  getCart,
  addItem,
  removeItem,
  clearCart,
  getTotal
};
