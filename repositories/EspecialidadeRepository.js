import Especialidade from "../models/Especialidade.js";

const saveEspecialidade = async (especialidadeModel) => {
  const save = await Especialidade.create(especialidadeModel);
  return save;
};

const getEspecialidadeById = async (id) => {
  return await Especialidade.findByPk(id);
};

const getAllEspecialidades = async () => {
  return await Especialidade.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteEspecialidadeById = async (id) => {
  return await Especialidade.destroy({ where: { id: id } });
};

const updateEspecialidadeById = async (especialidadeModel, id) => {
  try {
    const update = await Especialidade.update(especialidadeModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` especialidade updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveEspecialidade,
  getEspecialidadeById,
  getAllEspecialidades,
  deleteEspecialidadeById,
  updateEspecialidadeById,
};

export default factory;
