const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    if (!item || typeof item.name !== 'string' || item.name.trim() === '') {
      console.log("Error: Item name is missing or invalid.");
      return;
    }

    const itemPrice = +item.price; 

    if (typeof itemPrice !== 'number' || isNaN(itemPrice)) {
      console.log(`Error: Invalid price for item "${item.name}". Price must be a valid number.`);
      return;
    }

    this.items.push({ name: item.name, price: itemPrice });
    this.total += itemPrice;
    console.log(`Added "${item.name}" with price $${itemPrice.toFixed(2)}.`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`; 
  }
};

console.log("--- Adding Items ---");
checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "Book", price: "12.00" });
checkout.addItem({ name: "Invalid Item (NaN price)", price: "abc" });
checkout.addItem({ name: "Another Invalid Item", price: null });
checkout.addItem({ name: "Item with no price" });
checkout.addItem({ price: 20.00 });
checkout.addItem({});

console.log("\n--- Current Total ---");
console.log(checkout.getTotal());

console.log("\n--- After further additions ---");
checkout.addItem({ name: "Headphones", price: 75.25 });
console.log(checkout.getTotal());

console.log("\n--- Inspecting items array ---");
console.log(checkout.items);

/*
Fixes made -
  - Added validation for `item` existence and `item.name` being a non-empty string.
  - Explicitly converted `item.price` to a number using the unary plus operator (`+item.price`) to prevent string concatenation issues with `this.total`.
  - Improved price validation to check if the converted `itemPrice` is a valid number (`isNaN`).
  - Stored the validated numeric price in the `this.items` array.
  - Added descriptive console logs for successful additions and validation errors.
  - Corrected the ES6 template literal syntax from `returnTotal: $${...}` to `` `Total: $${...}` ``.
  - Used `this.total.toFixed(2)` to ensure the total is formatted to two decimal places for currency, leveraging the fact that `this.total` is now consistently a number.
*/
