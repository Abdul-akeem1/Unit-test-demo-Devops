// Tests for issue #2, refined for issue #3

const ShoppingCart = require("../src/ShoppingCart");

describe("ShoppingCart", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  describe("addItem", () => {
    test("adds an item with the default quantity of 1", () => {
      cart.addItem("Apple", 10);
      expect(cart.getTotal()).toBe(10);
    });

    test("adds an item with a specified quantity", () => {
      cart.addItem("Banana", 5, 3);
      expect(cart.getTotal()).toBe(15);
    });

    test("allows a price of 0", () => {
      cart.addItem("Free sample", 0);
      expect(cart.getTotal()).toBe(0);
    });

    test("throws when the price is negative", () => {
      expect(() => cart.addItem("Orange", -1)).toThrow("Invalid price or quantity");
    });

    test("throws when the quantity is zero", () => {
      expect(() => cart.addItem("Orange", 2, 0)).toThrow("Invalid price or quantity");
    });

    test("throws when the quantity is negative", () => {
      expect(() => cart.addItem("Orange", 2, -2)).toThrow("Invalid price or quantity");
    });
  });

  describe("removeItem", () => {
    test("removes an item and updates the total", () => {
      cart.addItem("Apple", 10);
      cart.addItem("Banana", 5);
      cart.removeItem("Apple");
      expect(cart.getTotal()).toBe(5);
    });

    test("removes every entry with the same name", () => {
      cart.addItem("Apple", 10);
      cart.addItem("Apple", 12, 2);
      cart.removeItem("Apple");
      expect(cart.getTotal()).toBe(0);
    });

    test("does nothing when the item doesn't exist", () => {
      cart.addItem("Apple", 10);
      cart.removeItem("Missing");
      expect(cart.getTotal()).toBe(10);
    });
  });

  describe("getTotal", () => {
    test("returns 0 for an empty cart", () => {
      expect(cart.getTotal()).toBe(0);
    });

    test("includes quantities in the total", () => {
      cart.addItem("Apple", 10, 2);
      cart.addItem("Banana", 5, 3);
      expect(cart.getTotal()).toBe(35);
    });
  });
});