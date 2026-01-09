let orderCounter = 0;
import instruments from "../models/instruments.js";
import orders from "../models/orders.js";
import portfolio from "../models/portfolio.js";
import logger from "../utils/logger.js";
import AppError from "../utils/AppError.js";

const getInstruments = (req, res) => {
	logger.info(`Fetching ${instruments.size} instruments`);
	res.json({ instruments: Array.from(instruments.values()) });
};

const createOrder = (req, res) => {
	let user_id = 61;
	const orderData = req.body;
	logger.info(`User ${user_id} is creating an order`, orderData);
	const { order_type, order_style, quantity, price } = orderData;
	if (!["buy", "sell"].includes(order_type)) {
		logger.warn("Invalid order type", { order_type, user_id });
		throw new AppError("Invalid order type", 400);
	}
	if (!["market", "limit"].includes(order_style)) {
		logger.warn("Invalid order style", { order_style, user_id });
		throw new AppError("Invalid order style", 400);
	}
	if (quantity <= 0) {
		logger.warn("Invalid quantity", { quantity, user_id });
		throw new AppError("Quantity must be greater than zero", 400);
	}
	if (order_style === "limit" && (price === undefined || price <= 0)) {
		logger.warn("Invalid price for limit order", { price, user_id });
		throw new AppError("Invalid price for limit order", 400);
	}
	if (price && price <= 0) {
		logger.warn("Invalid price", { price, user_id });
		throw new AppError("Price must be greater than zero", 400);
	}
	const states = ["new", "placed", "executed", "cancelled"];
    let status = states[Math.floor(Math.random() * states.length)];
    if(order_style === "market") {
        status = "executed";
    }
	orders.set(++orderCounter, {
		orderId: orderCounter,
		user_id,
		...orderData,
		status,
	});
	logger.info("Order created", {
		orderCounter,
		user_id,
		status,
	});
	res.status(201).json({
		message: "Order created",
		order: { orderId: orderCounter, user_id, ...orderData },
	});
};

const getOrders = (req, res) => {
	const { orderId } = req.params;
	const order = orders.get(Number(orderId));
	if (!order) {
		logger.warn("Order not found", { orderId });
		throw new AppError("Order not found", 404);
	}
	logger.info("Fetching order", { orderId });
	res.json({ order });
};

const getTrades = (req, res) => {
	let user_id = 61;
	const trades = new Map();
	logger.info("Fetching trades for user", { user_id });
	orders.forEach((order) => {
		if (order.user_id === user_id && order.status === "executed") {
			trades.set(order.orderId, {
				orderId: order.orderId,
				order_type: order.order_type,
				quantity: order.quantity,
				price: order.price,
			});
		}
	});
	logger.info("Fetched trades for user", {
		user_id,
		tradesCount: trades.size,
	});
	res.json({ trades: Array.from(trades.values()) });
};

const getPortfolio = (req, res) => {
	const user_id = 61;
	logger.info("Fetching portfolio for user", { user_id });
	const userPortfolio = portfolio.get(user_id) || [];
	const totalValue = userPortfolio.reduce(
		(acc, holding) => acc + holding.currentValue,
		0
	);
	logger.info("Fetched portfolio for user", { user_id, totalValue });
	res.json({ portfolio: { totalValue, holdings: userPortfolio } });
};

export { getInstruments, createOrder, getOrders, getTrades, getPortfolio };
