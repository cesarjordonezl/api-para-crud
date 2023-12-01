const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular

   
   const Usuario = sequelize.define('usuario', {
    
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: true
        
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    }
    
});

module.exports = Usuario;
