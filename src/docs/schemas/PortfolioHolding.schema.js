/**
 * @swagger
 * components:
 *   schemas:
 *     PortfolioHolding:
 *       type: object
 *       required:
 *         - symbol
 *         - quantity
 *         - averagePrice
 *         - currentValue
 *       properties:
 *         symbol:
 *           type: string
 *           example: AAPL
 *           description: Trading symbol of the instrument
 *         quantity:
 *           type: integer
 *           example: 10
 *           description: Number of units held
 *         averagePrice:
 *           type: number
 *           format: float
 *           example: 150
 *           description: Average purchase price per unit
 *         currentValue:
 *           type: number
 *           format: float
 *           example: 1500
 *           description: Current total value of this holding
 */

