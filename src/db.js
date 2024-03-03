const Sequelize = require ("sequelize");
const InvModel = require ("./../models/Invitacion");

require ("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DEPLOY}=process.env;

//activa para local
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/modelos_invitacion`,
    {logging:false}
);

//ACTIVA PARA PRODUCCION
// const sequelize = new Sequelize(
//     DB_DEPLOY,
//     {logging:false} //esto es para que no llene la consola
// );

InvModel(sequelize);

const Invitacion = sequelize.models.Invitacion;

module.exports = {sequelize,...sequelize.models}