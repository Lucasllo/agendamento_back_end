import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Agendamento = sequelize.define(
  "agendamento",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    pagamento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  { underscored: true }
);

export default Agendamento;
