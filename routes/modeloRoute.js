const {Router} = require ("express");

const {createInvHandler, getInvListHandler, modifyInvHandler, deleteInvHandler} = require("../handlers/invHandler");

const invRouter = Router();

const validate = (req, res, next) => {
    const {nombre_modelo} = req.body;
    if(!nombre_modelo)
    return res.status(400).json({error:"falta nombre de modelo"})
    next();
}

invRouter.post("/", validate, createInvHandler);
invRouter.get("/", getInvListHandler);
invRouter.put("/", modifyInvHandler);
invRouter.delete("/", deleteInvHandler);

module.exports = invRouter;