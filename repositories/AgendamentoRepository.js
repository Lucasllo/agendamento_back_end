import Agendamento from "../models/Agendamento.js";

const saveAgendamento = async (agendamentoModel) => {
  const save = await Agendamento.create(agendamentoModel);
  return save;
};

const getAgendamentoById = async (id) => {
  return await Agendamento.findByPk(id);
};

const getAllAgendamentos = async () => {
  return await Agendamento.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteAgendamentoById = async (id) => {
  return await Agendamento.destroy({ where: { id: id } });
};

const updateAgendamentoById = async (agendamentoModel, id) => {
  try {
    const update = await Agendamento.update(agendamentoModel, { where: { id: id } });
    if (update[0] === 1) {
      return { message: ` agendamento updated with success` };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveAgendamento,
  getAgendamentoById,
  getAllAgendamentos,
  deleteAgendamentoById,
  updateAgendamentoById,
};

export default factory;
