[![Node.js CI](https://img.shields.io/badge/Node.js-API-blue)]()

# Trading API Service

This project is a simple trading API built with Express.js. It provides endpoints for managing instruments, orders, trades, and user portfolios, with Swagger documentation and basic authentication middleware.

---

## 🚀 Setup & Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the repository
```bash
git clone <repo-url>
cd trading_assement
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
# or
node index.js
```

### 4. Access the API
- API base URL: `http://localhost:3000/api/v1/`
- Swagger docs: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Use Bearer token - `valid-token`.

---

## 📖 API Endpoints

All endpoints require Bearer authentication (see assumptions below).

### Instruments
- `GET /api/v1/instruments` — List all tradable instruments

### Orders
- `POST /api/v1/orders` — Create a new order (buy/sell)
	- Body: `{ order_type, order_style, quantity, price }`
- `GET /api/v1/orders/:orderId` — Get order by ID

### Trades
- `GET /api/v1/trades` — List all executed trades for the user

### Portfolio
- `GET /api/v1/portfolio` — Get the user's portfolio (total value and holdings)

### API Documentation
- Swagger UI: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## ⚙️ Assumptions Made

- **Authentication**: The authentication middleware is present, but for demo purposes, a hardcoded user ID (`user_id = 61`) is used in controllers. Real authentication/authorization is not implemented.
- **Data Storage**: Data is stored in-memory using JavaScript Maps. No database is used; all data resets on server restart.
- **Order Execution**: Order status is randomly assigned except for market orders, which are always marked as `executed`.
- **Validation**: Basic validation is performed for order creation (type, style, quantity, price).
- **Logging**: All requests and key actions are logged using a custom logger.
- **Swagger**: API is documented using Swagger (OpenAPI) with example schemas.
- **Error Handling**: Custom `AppError` is used for error responses.
