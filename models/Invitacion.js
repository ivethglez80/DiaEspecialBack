const {DataTypes} = require ("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Invitacion",
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            imagen:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nombre_modelo:{
                type: DataTypes.STRING,
                allowNull: false
            },
            ocasion:{
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo:{
                type: DataTypes.STRING,
                allowNull: false
            },
            urlSample:{
                type: DataTypes.STRING,
                allowNull: true
            }         
        },
        { timestamps: false }
    )
};