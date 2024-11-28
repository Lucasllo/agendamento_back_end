import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Especialidade = sequelize.define(
  "especialidade",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
  },
  { underscored: true }
);

export default Especialidade;
