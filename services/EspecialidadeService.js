import especialidadeRepository from "../repositories/EspecialidadeRepository.js";

const saveEspecialidade = (especialidadeModel) => {
  return especialidadeRepository.saveEspecialidade(especialidadeModel);
};

const getEspecialidadeById = (id) => {
  return especialidadeRepository.getEspecialidadeById(id);
};

const getAllEspecialidades = () => {
  return especialidadeRepository.getAllEspecialidades();
};

const deleteEspecialidadeById = (id) => {
  return especialidadeRepository.deleteEspecialidadeById(id);
};

const updateEspecialidadeById = (especialidadeModel, id) => {
  return especialidadeRepository.updateEspecialidadeById(especialidadeModel, id);
};

const service = {
  saveEspecialidade,
  getEspecialidadeById,
  getAllEspecialidades,
  deleteEspecialidadeById,
  updateEspecialidadeById,
};

export default service;
