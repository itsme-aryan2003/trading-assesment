import logger from "../utils/logger.js";

const requestLogger = (req, res, next) => {
	const start = Date.now();

	logger.info("HTTP Request Started", {
		method: req.method,
		url: req.originalUrl,
	});

	res.on("finish", () => {
		logger.info("HTTP Request Finished", {
			method: req.method,
			url: req.originalUrl,
			status: res.statusCode,
			durationMs: Date.now() - start,
		});
	});

	next();
};

export default requestLogger;
