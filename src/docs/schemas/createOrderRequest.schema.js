/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOrderRequest:
 *       type: object
 *       required:
 *         - order_type
 *         - order_style
 *         - quantity
 *       properties:
 *         order_type:
 *           type: string
 *           enum: [buy, sell]
 *           example: buy
 *           description: Type of order
 *         order_style:
 *           type: string
 *           enum: [market, limit]
 *           example: limit
 *           description: Order execution style
 *         quantity:
 *           type: integer
 *           example: 10
 *           description: Quantity to trade (must be > 0)
 *         price:
 *           type: number
 *           format: float
 *           example: 2800.5
 *           description: Required only for limit orders
 */
