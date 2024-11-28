import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Disponibilidade = sequelize.define(
  "disponibilidade",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    horario: {
        type: DataTypes.STRING, // verificar se pode ser 'DataTypes.TIME'
        allowNull: false,
    },
    disponivel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  { underscored: true }
);

export default Disponibilidade;
