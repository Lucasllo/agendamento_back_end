import disponibilidadeRepository from "../repositories/DisponibilidadeRepository.js";

const saveDisponibilidade = (disponibilidadeModel) => {
  return disponibilidadeRepository.saveDisponibilidade(disponibilidadeModel);
};

const getDisponibilidadeById = (id) => {
  return disponibilidadeRepository.getDisponibilidadeById(id);
};

const getAllDisponibilidades = () => {
  return disponibilidadeRepository.getAllDisponibilidades();
};

const deleteDisponibilidadeById = (id) => {
  return disponibilidadeRepository.deleteDisponibilidadeById(id);
};

const updateDisponibilidadeById = (disponibilidadeModel, id) => {
  return disponibilidadeRepository.updateDisponibilidadeById(disponibilidadeModel, id);
};

const service = {
  saveDisponibilidade,
  getDisponibilidadeById,
  getAllDisponibilidades,
  deleteDisponibilidadeById,
  updateDisponibilidadeById,
};

export default service;
