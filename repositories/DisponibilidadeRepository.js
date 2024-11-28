import Disponibilidade from "../models/Disponibilidade.js";

const saveDisponibilidade = async (disponibilidadeModel) => {
  const save = await Disponibilidade.create(disponibilidadeModel);
  return save;
};

const getDisponibilidadeById = async (id) => {
  return await Disponibilidade.findByPk(id);
};

const getAllDisponibilidades = async () => {
  return await Disponibilidade.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteDisponibilidadeById = async (id) => {
  return await Disponibilidade.destroy({ where: { id: id } });
};

const updateDisponibilidadeById = async (disponibilidadeModel, id) => {
  try {
    const update = await Disponibilidade.update(disponibilidadeModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` disponibilidade updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveDisponibilidade,
  getDisponibilidadeById,
  getAllDisponibilidades,
  deleteDisponibilidadeById,
  updateDisponibilidadeById,
};

export default factory;
