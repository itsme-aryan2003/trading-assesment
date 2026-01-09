/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - orderId
 *         - user_id
 *         - order_type
 *         - order_style
 *         - quantity
 *         - status
 *       properties:
 *         orderId:
 *           type: integer
 *           example: 12
 *           description: Unique identifier for the order
 *         user_id:
 *           type: integer
 *           example: 61
 *           description: ID of the user who placed the order
 *         order_type:
 *           type: string
 *           enum: [buy, sell]
 *           example: buy
 *           description: Buy or sell order
 *         order_style:
 *           type: string
 *           enum: [market, limit]
 *           example: limit
 *           description: Market or limit order
 *         quantity:
 *           type: integer
 *           example: 10
 *           description: Quantity of the instrument to trade
 *         price:
 *           type: number
 *           format: float
 *           example: 2800.5
 *           nullable: true
 *           description: Required only for limit orders
 *         status:
 *           type: string
 *           enum: [new, placed, executed, cancelled]
 *           example: placed
 *           description: Current status of the order
 */