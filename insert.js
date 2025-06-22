// Създаване на база данни и добавяне на документи

use online_shop;

// Колекция: users
// Добавяне на потребители
db.users.insertMany([
  { name: "Ivan", email: "ivan@example.com", age: 30, address: { city: "Sofia", zip: "1000" } },
  { name: "Maria", email: "maria@example.com", age: 28, address: { city: "Plovdiv", zip: "4000" } },
  { name: "Petar", email: "petar@example.com", age: 35, address: { city: "Varna", zip: "9000" } },
  { name: "Anna", email: "anna@example.com", age: 22, address: { city: "Burgas", zip: "8000" } },
  { name: "Georgi", email: "georgi@example.com", age: 40, address: { city: "Sofia", zip: "1000" } },
  { name: "Elena", email: "elena@example.com", age: 26, address: { city: "Ruse", zip: "7000" } },
  { name: "Nikolay", email: "nikolay@example.com", age: 33, address: { city: "Sofia", zip: "1000" } },
  { name: "Kristina", email: "kristina@example.com", age: 29, address: { city: "Varna", zip: "9000" } },
  { name: "Todor", email: "todor@example.com", age: 45, address: { city: "Plovdiv", zip: "4000" } },
  { name: "Desislava", email: "desi@example.com", age: 31, address: { city: "Sofia", zip: "1000" } }
]);

// Колекция: categories
// Добавяне на категории
db.categories.insertMany([
  { name: "Electronics" },
  { name: "Books" },
  { name: "Clothing" },
  { name: "Home" },
  { name: "Sports" }
]);

// Колекция: products
// Добавяне на продукти
db.products.insertMany([
  { name: "Laptop", price: 1200, stock: 10, category: "Electronics", tags: ["tech", "work"] },
  { name: "Smartphone", price: 800, stock: 15, category: "Electronics", tags: ["mobile"] },
  { name: "Running Shoes", price: 100, stock: 30, category: "Sports", tags: ["fitness"] },
  { name: "T-shirt", price: 20, stock: 50, category: "Clothing", tags: ["fashion"] },
  { name: "Sofa", price: 600, stock: 5, category: "Home", tags: ["furniture"] },
  { name: "Blender", price: 90, stock: 8, category: "Home", tags: ["kitchen"] },
  { name: "Book - JS", price: 35, stock: 20, category: "Books", tags: ["learning"] },
  { name: "Monitor", price: 250, stock: 12, category: "Electronics", tags: ["display"] },
  { name: "Backpack", price: 45, stock: 25, category: "Clothing", tags: ["accessories"] },
  { name: "Yoga Mat", price: 30, stock: 40, category: "Sports", tags: ["wellness"] }
]);

// Колекция: orders
// Добавяне на поръчки
db.orders.insertMany([
  { user: "Ivan", products: ["Laptop", "Monitor"], total: 1450, date: new Date() },
  { user: "Maria", products: ["T-shirt", "Backpack"], total: 65, date: new Date() },
  { user: "Petar", products: ["Smartphone"], total: 800, date: new Date() },
  { user: "Anna", products: ["Book - JS"], total: 35, date: new Date() },
  { user: "Georgi", products: ["Blender", "Yoga Mat"], total: 120, date: new Date() },
  { user: "Elena", products: ["Sofa"], total: 600, date: new Date() },
  { user: "Nikolay", products: ["Running Shoes"], total: 100, date: new Date() },
  { user: "Kristina", products: ["Laptop"], total: 1200, date: new Date() },
  { user: "Todor", products: ["Smartphone", "T-shirt"], total: 820, date: new Date() },
  { user: "Desislava", products: ["Book - JS", "Monitor"], total: 285, date: new Date() }
]);

// Колекция: reviews
// Добавяне на ревюта
db.reviews.insertMany([
  { product: "Laptop", user: "Ivan", rating: 5, comment: "Perfect!", date: new Date() },
  { product: "Smartphone", user: "Petar", rating: 4, comment: "Good device", date: new Date() },
  { product: "T-shirt", user: "Maria", rating: 3, comment: "Average quality", date: new Date() },
  { product: "Blender", user: "Georgi", rating: 4, comment: "Useful in the kitchen", date: new Date() },
  { product: "Book - JS", user: "Anna", rating: 5, comment: "Very informative", date: new Date() },
  { product: "Monitor", user: "Ivan", rating: 4, comment: "Nice display", date: new Date() },
  { product: "Yoga Mat", user: "Georgi", rating: 5, comment: "Great for yoga", date: new Date() },
  { product: "Backpack", user: "Maria", rating: 4, comment: "Comfortable", date: new Date() },
  { product: "Running Shoes", user: "Nikolay", rating: 5, comment: "Excellent grip", date: new Date() },
  { product: "Sofa", user: "Elena", rating: 3, comment: "Decent comfort", date: new Date() }
]);
