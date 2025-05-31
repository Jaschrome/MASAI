const checkout = {
    items: [],
    total: 0,
    addItem(item) {
        let price = item.price;

        if (typeof price === 'string') {
            price = parseFloat(price);
        }

        if (typeof price !== 'number' || isNaN(price) || !Number.isFinite(price) || price < 0) {
            console.log("Invalid price.");
            return;
        }

        if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
            console.log("Invalid item name.");
            return;
        }

        this.items.push({ name: item.name, price: price });
        this.total += price;
        console.log(`Added: ${item.name} with price ${price.toFixed(2)}`);
    },
    getTotal() {
        return `Total: $${parseFloat(this.total).toFixed(2)}`;
    }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "Sugar", price: "invalid_price" });
checkout.addItem({ name: "Book", price: -10 });
checkout.addItem({ name: "Keyboard", price: 75.00 });

console.log(checkout.getTotal());
console.log("Final items:", checkout.items);
