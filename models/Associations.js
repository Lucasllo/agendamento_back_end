import Agendamento from "./Agendamento.js";
import Disponibilidade from "./Disponibilidade.js";
import Paciente from "./Paciente.js";
import Retorno from "./Retorno.js";

const associations = () => {
  Paciente.hasMany(Agendamento);
  Paciente.hasMany(Retorno);
  Agendamento.hasMany(Disponibilidade);
};

const factory = {
  associations,
};

export default factory;
