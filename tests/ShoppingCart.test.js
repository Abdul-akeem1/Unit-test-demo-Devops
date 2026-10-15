// Tests for issue #2: unit tests for ShoppingCart

const ShoppingCart = require("../src/ShoppingCart");

describe("ShoppingCart", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test("adds an item with the default quantity of 1", () => {
    cart.addItem("Apple", 10);

    expect(cart.items).toEqual([
      { name: "Apple", price: 10, quantity: 1 },
    ]);
  });

  test("adds an item with a specified quantity", () => {
    cart.addItem("Banana", 5, 3);

    expect(cart.items).toEqual([
      { name: "Banana", price: 5, quantity: 3 },
    ]);
  });

  test("throws an error when the price is negative", () => {
    expect(() => cart.addItem("Orange", -1)).toThrow("Invalid price or quantity");
  });

  test("throws an error when the quantity is zero or negative", () => {
    expect(() => cart.addItem("Orange", 2, 0)).toThrow("Invalid price or quantity");
    expect(() => cart.addItem("Orange", 2, -2)).toThrow("Invalid price or quantity");
  });

  test("removes an item by name", () => {
    cart.addItem("Apple", 10);
    cart.addItem("Banana", 5);
    cart.addItem("Apple", 12, 2);

    cart.removeItem("Apple");

    expect(cart.items).toEqual([
      { name: "Banana", price: 5, quantity: 1 },
    ]);
  });

  test("calculates the total for all items including quantities", () => {
    cart.addItem("Apple", 10, 2);
    cart.addItem("Banana", 5, 3);

    expect(cart.getTotal()).toBe(35);
  });

  test("returns 0 when the cart is empty", () => {
    expect(cart.getTotal()).toBe(0);
  });
});