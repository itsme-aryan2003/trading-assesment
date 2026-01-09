/**
 * @swagger
 * components:
 *   schemas:
 *     Trade:
 *       type: object
 *       required:
 *         - orderId
 *         - order_type
 *         - quantity
 *         - price
 *       properties:
 *         orderId:
 *           type: integer
 *           example: 15
 *           description: Order ID that generated this trade
 *         order_type:
 *           type: string
 *           enum: [buy, sell]
 *           example: buy
 *           description: Type of executed order
 *         quantity:
 *           type: integer
 *           example: 5
 *           description: Quantity executed
 *         price:
 *           type: number
 *           format: float
 *           example: 2800.5
 *           description: Execution price
 */