import express from "express";
import disponibilidadeService from "../services/DisponibilidadeService.js";

const router = express.Router();

router.post("/addDisponibilidade", async function (req, res) {
  const disponibilidadeModel = {
    nome: req.body.nome,
  };

  const disponibilidade = await disponibilidadeService.saveDisponibilidade(disponibilidadeModel);
  return res.status(200).json(disponibilidade);
});

router.delete("/deleteDisponibilidade/:id", async function (req, res) {
  const disponibilidade = await disponibilidadeService.deleteDisponibilidadeById(req.params.id);
  return res.status(200).json(disponibilidade);
});

router.get("/getAllDisponibilidades", async function (req, res) {
  const disponibilidades = await disponibilidadeService.getAllDisponibilidades();
  return res.status(200).json(disponibilidades);
});

router.get("/getDisponibilidade/:id", async function (req, res) {
  const disponibilidade = await disponibilidadeService.getDisponibilidadeById(req.params.id);
  return res.status(200).json(disponibilidade);
});

router.put("/updateDisponibilidade/:id", async function (req, res) {
  const disponibilidadeModel = {
    nome: req.body.nome,
  };

  const disponibilidade = await disponibilidadeService.updateDisponibilidadeById(
    disponibilidadeModel,
    req.params.id
  );
  return res.status(200).json(disponibilidade);
});

export default router;
