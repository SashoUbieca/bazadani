use online_shop;

// ------------------- READ -------------------
// Всички документи
db.users.find();
db.products.find();
db.orders.find();
db.categories.find();
db.reviews.find();

// Филтриране по едно поле
db.users.find({ "address.city": "Sofia" });
db.products.find({ category: "Electronics" });
db.orders.find({ user: "Ivan" });
db.categories.find({ name: "Books" });
db.reviews.find({ rating: 5 });

// Филтриране по няколко полета
db.users.find({ age: { $gt: 25 }, "address.city": "Sofia" });
db.products.find({ category: "Electronics", price: { $lt: 1000 } });
db.orders.find({ total: { $gt: 500 }, user: "Ivan" });
db.reviews.find({ product: "Laptop", rating: 5 });

// ------------------- UPDATE -------------------
// Актуализиране на един документ по условие
db.users.updateOne({ name: "Ivan" }, { $set: { age: 31 } });
db.products.updateOne({ name: "Laptop" }, { $inc: { stock: -1 } });
db.orders.updateOne({ user: "Anna" }, { $set: { total: 40 } });
db.categories.updateOne({ name: "Books" }, { $set: { description: "Educational" } });
db.reviews.updateOne({ product: "Sofa" }, { $set: { rating: 4 } });

// ------------------- DELETE -------------------
// Изтриване на един документ по условие
db.users.deleteOne({ name: "Petar" });
db.products.deleteOne({ name: "T-shirt" });
db.orders.deleteOne({ user: "Kristina" });
db.categories.deleteOne({ name: "Clothing" });
db.reviews.deleteOne({ product: "Sofa" });

// ------------------- AGGREGATE -------------------
// Групиране + Сумиране/броене
db.orders.aggregate([
  { $group: { _id: "$user", totalSpent: { $sum: "$total" } } }
]);

db.products.aggregate([
  { $group: { _id: "$category", avgPrice: { $avg: "$price" }, totalStock: { $sum: "$stock" } } }
]);

db.reviews.aggregate([
  { $group: { _id: "$product", avgRating: { $avg: "$rating" }, count: { $sum: 1 } } }
]);

// Филтриране и сортиране
db.products.aggregate([
  { $match: { price: { $gt: 100 } } },
  { $sort: { price: -1 } }
]);

db.reviews.aggregate([
  { $match: { rating: { $gte: 4 } } },
  { $sort: { date: -1 } }
]);
