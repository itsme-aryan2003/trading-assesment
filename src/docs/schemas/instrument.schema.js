/**
 * @swagger
 * components:
 *   schemas:
 *     Instrument:
 *       type: object
 *       required: [symbol, name, exchange, instrumentType, lastTradePrice]
 *       properties:
 *         symbol:
 *           type: string
 *           example: GOOGL
 *         name:
 *           type: string
 *           example: Alphabet Inc.
 *         exchange:
 *           type: string
 *           example: NASDAQ
 *         instrumentType:
 *           type: string
 *           example: Stock
 *         lastTradePrice:
 *           type: number
 *           example: 2800.5
 */
