const {Invitacion} = require ("./../../src/db");

const createInv = async (imagen, nombre_modelo, ocasion, tipo, urlSample) =>
    await Invitacion.create ({imagen, nombre_modelo, ocasion, tipo, urlSample});

const getInvList = async () => {
    const dbInv = await Invitacion.findAll();
    return [...dbInv];
};

const modifyInv = async (id, imagen, nombre_modelo, ocasion, tipo, urlSample) => {
    const modified = await Invitacion.update ({id, imagen, nombre_modelo, ocasion, tipo, urlSample},
        {
            where: {id:id}
        }
        );
    if (modified[0]>0){
        const mdfdInv = await Invitacion.findOne({where:{id:id}});
        return mdfdInv;
    }else{
        return null;
    }
};

const deleteInv = async (id) => {
    const deleted = await Invitacion.destroy({
        where:{id:id}
    })
    if (deleted>0){
        return true;
    }else{
        return null;
    }
};


module.exports = {createInv, getInvList, modifyInv, deleteInv};
