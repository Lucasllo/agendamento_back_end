import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Paciente = sequelize.define(
  "paciente",
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
    cpf: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  { underscored: true }
);

export default Paciente;
