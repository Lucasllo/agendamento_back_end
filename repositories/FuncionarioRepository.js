import Funcionario from "../models/Funcionario.js";

const saveFuncionario = async (funcionarioModel) => {
  const save = await Funcionario.create(funcionarioModel);
  return save;
};

const getFuncionarioById = async (id) => {
  return await Funcionario.findByPk(id);
};

const getAllFuncionarios = async () => {
  return await Funcionario.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteFuncionarioById = async (id) => {
  return await Funcionario.destroy({ where: { id: id } });
};

const updateFuncionarioById = async (funcionarioModel, id) => {
  try {
    const update = await Funcionario.update(funcionarioModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` funcionario updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveFuncionario,
  getFuncionarioById,
  getAllFuncionarios,
  deleteFuncionarioById,
  updateFuncionarioById,
};

export default factory;
