import swaggerJsdoc from "swagger-jsdoc";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Campus Hiring Assignment Trading API",
			version: "1.0.0",
			description: "API documentation for trading system",
		},
		servers: [
			{
				url: "http://localhost:3000",
				description: "Local server",
			},
		],
	},
	apis: ["./src/routes/*.js",
        "./src/docs/*.js",
        "./src/docs/**/*.js"
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
