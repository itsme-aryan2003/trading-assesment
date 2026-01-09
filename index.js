import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import authmiddleware from "./src/middlewares/authmiddleware.js";
import requestLogger from "./src/middlewares/requestLogger.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Sever Running!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(requestLogger);
app.use(authmiddleware);

app.use("/api/v1", userRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});