const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader === "Bearer valid-token") {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

export default authmiddleware;