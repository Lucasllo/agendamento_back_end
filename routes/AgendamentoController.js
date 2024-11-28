import express from "express";
import agendamentoService from "../services/AgendamentoService.js";

const router = express.Router();

router.post("/addAgendamento", async function (req, res) {
  const agendamentoModel = {
    nome: req.body.nome,
  };

  const agendamento = await agendamentoService.saveAgendamento(agendamentoModel);
  return res.status(200).json(agendamento);
});

router.delete("/deleteAgendamento/:id", async function (req, res) {
  const agendamento = await agendamentoService.deleteAgendamentoById(req.params.id);
  return res.status(200).json(agendamento);
});

router.get("/getAllAgendamentos", async function (req, res) {
  const agendamentos = await agendamentoService.getAllAgendamentos();
  return res.status(200).json(agendamentos);
});

router.get("/getAgendamento/:id", async function (req, res) {
  const agendamento = await agendamentoService.getAgendamentoById(req.params.id);
  return res.status(200).json(agendamento);
});

router.put("/updateAgendamento/:id", async function (req, res) {
  const agendamentoModel = {
    nome: req.body.nome,
  };

  const agendamento = await agendamentoService.updateAgendamentoById(
    agendamentoModel,
    req.params.id
  );
  return res.status(200).json(agendamento);
});

export default router;
