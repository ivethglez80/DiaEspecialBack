const {createInv, getInvList, modifyInv, deleteInv } = require ("../controllers/invController/invController");

const createInvHandler = async (req, res) => {
    const {imagen, nombre_modelo, ocasion, tipo, urlSample} = req.body;
    try {
        const newInv = await createInv(imagen, nombre_modelo, ocasion, tipo, urlSample);
        res.status(201).json(newInv);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getInvListHandler = async (req, res) => {
    try {
        const results = await getInvList();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const modifyInvHandler = async (req, res) => {
    const {id, imagen, nombre_modelo, ocasion, tipo, urlSample} = req.body;
    try {
        const getModified = await modifyInv (id, imagen, nombre_modelo, ocasion, tipo, urlSample);
        if (getModified){
            res.status(200).json(getModified)
        }else{
            res.status(404).json({error:"Inv not found"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

const deleteInvHandler = async (req,res) => {
    const {id} = req.body;
    try {
        const invDeleted = await deleteInv(id);
        if (invDeleted){
            res.status(200).json({message: `Gift with ID: ${id}, deleted succesfully`})
        }else{
            res.status(404).json({error:"Gift not found"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

module.exports = {
    createInvHandler, 
    getInvListHandler,
    modifyInvHandler,
    deleteInvHandler
};

