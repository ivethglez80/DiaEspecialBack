const {Router} = require("express");
const emailRoute = require("./sendEmailRoute");
const modeloRoute = require("./modeloRoute")

const mainRouter = Router();

mainRouter.use("/send-email", emailRoute);
mainRouter.use("/catalogo", modeloRoute);

module.exports = mainRouter;
