import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Funcionario = sequelize.define(
  "funcionario",
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
    cracha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  { underscored: true }
);

export default Funcionario;
