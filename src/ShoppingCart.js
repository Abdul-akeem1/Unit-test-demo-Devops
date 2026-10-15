// Implements issue #1: Add ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity = 1) {
    if (price < 0 || quantity <= 0) {
      throw new Error("Invalid price or quantity");
    }
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}

module.exports = ShoppingCart;