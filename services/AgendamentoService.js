import agendamentoRepository from "../repositories/AgendamentoRepository.js";

const saveAgendamento = (agendamentoModel) => {
  return agendamentoRepository.saveAgendamento(agendamentoModel);
};

const getAgendamentoById = (id) => {
  return agendamentoRepository.getAgendamentoById(id);
};

const getAllAgendamentos = () => {
  return agendamentoRepository.getAllAgendamentos();
};

const deleteAgendamentoById = (id) => {
  return agendamentoRepository.deleteAgendamentoById(id);
};

const updateAgendamentoById = (agendamentoModel, id) => {
  return agendamentoRepository.updateAgendamentoById(agendamentoModel, id);
};

const service = {
  saveAgendamento,
  getAgendamentoById,
  getAllAgendamentos,
  deleteAgendamentoById,
  updateAgendamentoById,
};

export default service;
