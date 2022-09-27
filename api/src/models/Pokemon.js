const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      foreignKey: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "../images/unknown.png.png",
    },
    vida: {
      type: DataTypes.INTEGER,
    },
    ataque: {
      type: DataTypes.INTEGER,
    },
    defensa: {
      type: DataTypes.INTEGER,
    },
    velocidad: {
      type: DataTypes.INTEGER,
    },
    altura: {
      type: DataTypes.FLOAT,
    },
    peso: {
      type: DataTypes.FLOAT,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
