import express from "express";
import especialidadeService from "../services/EspecialidadeService.js";

const router = express.Router();

router.post("/addEspecialidade", async function (req, res) {
  const especialidadeModel = {
    nome: req.body.nome,
  };

  const especialidade = await especialidadeService.saveEspecialidade(especialidadeModel);
  return res.status(200).json(especialidade);
});

router.delete("/deleteEspecialidade/:id", async function (req, res) {
  const especialidade = await especialidadeService.deleteEspecialidadeById(req.params.id);
  return res.status(200).json(especialidade);
});

router.get("/getAllEspecialidades", async function (req, res) {
  const especialidades = await especialidadeService.getAllEspecialidades();
  return res.status(200).json(especialidades);
});

router.get("/getEspecialidade/:id", async function (req, res) {
  const especialidade = await especialidadeService.getEspecialidadeById(req.params.id);
  return res.status(200).json(especialidade);
});

router.put("/updateEspecialidade/:id", async function (req, res) {
  const especialidadeModel = {
    nome: req.body.nome,
  };

  const especialidade = await especialidadeService.updateEspecialidadeById(
    especialidadeModel,
    req.params.id
  );
  return res.status(200).json(especialidade);
});

export default router;
