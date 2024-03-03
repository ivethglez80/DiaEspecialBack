const app = require ("./src/app");
const {sequelize} = require("./src/db");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    sequelize.sync({force: false})
    .then(()=>{
        console.log("tablas sincronizadas con exito");
    })
    .catch(err=>{
        console.log("error al sincronizar las tablas:", err);;
    });
    console.log(`listening on port ${PORT}`);
})