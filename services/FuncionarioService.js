import funcionarioRepository from "../repositories/FuncionarioRepository.js";

const saveFuncionario = (funcionarioModel) => {
  return funcionarioRepository.saveFuncionario(funcionarioModel);
};

const getFuncionarioById = (id) => {
  return funcionarioRepository.getFuncionarioById(id);
};

const getAllFuncionarios = () => {
  return funcionarioRepository.getAllFuncionarios();
};

const deleteFuncionarioById = (id) => {
  return funcionarioRepository.deleteFuncionarioById(id);
};

const updateFuncionarioById = (funcionarioModel, id) => {
  return funcionarioRepository.updateFuncionarioById(funcionarioModel, id);
};

const service = {
  saveFuncionario,
  getFuncionarioById,
  getAllFuncionarios,
  deleteFuncionarioById,
  updateFuncionarioById,
};

export default service;
