import pacienteRepository from "../repositories/PacienteRepository.js";

const savePaciente = (pacienteModel) => {
  return pacienteRepository.savePaciente(pacienteModel);
};

const getPacienteById = (id) => {
  return pacienteRepository.getPacienteById(id);
};

const getAllPacientes = () => {
  return pacienteRepository.getAllPacientes();
};

const deletePacienteById = (id) => {
  return pacienteRepository.deletePacienteById(id);
};

const updatePacienteById = (pacienteModel, id) => {
  return pacienteRepository.updatePacienteById(pacienteModel, id);
};

const service = {
  savePaciente,
  getPacienteById,
  getAllPacientes,
  deletePacienteById,
  updatePacienteById,
};

export default service;
