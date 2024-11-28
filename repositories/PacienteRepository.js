import Paciente from "../models/Paciente.js";

const savePaciente = async (pacienteModel) => {
  const save = await Paciente.create(pacienteModel);
  return save;
};

const getPacienteById = async (id) => {
  return await Paciente.findByPk(id);
};

const getAllPacientes = async () => {
  return await Paciente.findAll({
    order: [["id", "ASC"]],
  });
};

const deletePacienteById = async (id) => {
  return await Paciente.destroy({ where: { id: id } });
};

const updatePacienteById = async (pacienteModel, id) => {
  try {
    const update = await Paciente.update(pacienteModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` paciente updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  savePaciente,
  getPacienteById,
  getAllPacientes,
  deletePacienteById,
  updatePacienteById,
};

export default factory;
