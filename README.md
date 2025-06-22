#  MongoDB проект – Онлайн магазин

##  Описание
Проектът представлява MongoDB база данни за онлайн магазин, включваща потребители, продукти, поръчки, категории и отзиви. Включени са CRUD операции и агрегиращи заявки.

## 🗃 Колекции

### `users`
- Полета: name, email, age, address { city, zip }

### `products`
- Полета: name, price, stock, category, tags (масив)

### `orders`
- Полета: user, products (масив), total, date

### `categories`
- Полета: name

### `reviews`
- Полета: product, user, rating, comment, date

## ⚙️ Инсталация

1. Стартиране на MongoDB (например чрез Docker):
```bash
docker run -d -p 27017:27017 --name mongodb mongo
