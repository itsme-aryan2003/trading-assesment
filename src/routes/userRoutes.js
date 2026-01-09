import { Router } from "express";
import {
	createOrder,
	getInstruments,
	getOrders,
	getTrades,
	getPortfolio,
} from "../controllers/userControllers.js";

const router = Router();

/**
 * @swagger
 * /api/v1/instruments:
 *   get:
 *     summary: Get all instruments
 *     tags: [Trading]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of instruments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 instruments:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Instrument'
 *       401:
 *         description: Unauthorized – missing or invalid token
 */

router.get("/instruments", getInstruments);

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: Create a new order
 *     description: Creates a buy or sell order for the authenticated user
 *     tags: [Trading]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateOrderRequest'
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Order created
 *                 order:
 *                   $ref: '#/components/schemas/Order'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized – missing or invalid bearer token
 *       500:
 *         description: Internal server error
 */


router.post("/orders", createOrder);

/**
 * @swagger
 * /api/v1/orders/{orderId}:
 *   get:
 *     summary: Get order by ID
 *     description: Fetch a specific order for the authenticated user
 *     tags: [Trading]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Unique ID of the order
 *     responses:
 *       200:
 *         description: Order fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order:
 *                   $ref: '#/components/schemas/Order'
 *       401:
 *         description: Unauthorized – missing or invalid bearer token
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */


router.get("/orders/:orderId", getOrders);

/**
 * @swagger
 * /api/v1/trades:
 *   get:
 *     summary: Get executed trades for the authenticated user
 *     description: Returns all executed trades derived from the user’s orders
 *     tags: [Trading]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of executed trades
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trades:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Trade'
 *       401:
 *         description: Unauthorized – missing or invalid bearer token
 *       500:
 *         description: Internal server error
 */


router.get("/trades", getTrades);

/**
 * @swagger
 * /api/v1/portfolio:
 *   get:
 *     summary: Get portfolio for the authenticated user
 *     description: Returns the current portfolio including total value and holdings
 *     tags: [Trading]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User portfolio fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 portfolio:
 *                   $ref: '#/components/schemas/Portfolio'
 *       401:
 *         description: Unauthorized – missing or invalid bearer token
 *       500:
 *         description: Internal server error
 */


router.get("/portfolio", getPortfolio);

export default router;





