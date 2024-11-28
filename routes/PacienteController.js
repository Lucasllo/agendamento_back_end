import express from "express";
import pacienteService from "../services/PacienteService.js";

const router = express.Router();

router.post("/addPaciente", async function (req, res) {
  const pacienteModel = {
    nome: req.body.nome,
  };

  const paciente = await pacienteService.savePaciente(pacienteModel);
  return res.status(200).json(paciente);
});

router.delete("/deletePaciente/:id", async function (req, res) {
  const paciente = await pacienteService.deletePacienteById(req.params.id);
  return res.status(200).json(paciente);
});

router.get("/getAllPacientes", async function (req, res) {
  const pacientes = await pacienteService.getAllPacientes();
  return res.status(200).json(pacientes);
});

router.get("/getPaciente/:id", async function (req, res) {
  const paciente = await pacienteService.getPacienteById(req.params.id);
  return res.status(200).json(paciente);
});

router.put("/updatePaciente/:id", async function (req, res) {
  const pacienteModel = {
    nome: req.body.nome,
  };

  const paciente = await pacienteService.updatePacienteById(
    pacienteModel,
    req.params.id
  );
  return res.status(200).json(paciente);
});

export default router;
