import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const TipoFuncionario = sequelize.define(
  "tipo_funcionario",
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
    }
  },
  { underscored: true }
);

export default TipoFuncionario;
