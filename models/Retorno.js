import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Retorno = sequelize.define(
  "retorno",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    }
  },
  { underscored: true }
);

export default Retorno;
