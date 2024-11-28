import express from "express";
import funcionarioService from "../services/FuncionarioService.js";

const router = express.Router();

router.post("/addFuncionario", async function (req, res) {
  const funcionarioModel = {
    nome: req.body.nome,
  };

  const funcionario = await funcionarioService.saveFuncionario(funcionarioModel);
  return res.status(200).json(funcionario);
});

router.delete("/deleteFuncionario/:id", async function (req, res) {
  const funcionario = await funcionarioService.deleteFuncionarioById(req.params.id);
  return res.status(200).json(funcionario);
});

router.get("/getAllFuncionarios", async function (req, res) {
  const funcionarios = await funcionarioService.getAllFuncionarios();
  return res.status(200).json(funcionarios);
});

router.get("/getFuncionario/:id", async function (req, res) {
  const funcionario = await funcionarioService.getFuncionarioById(req.params.id);
  return res.status(200).json(funcionario);
});

router.put("/updateFuncionario/:id", async function (req, res) {
  const funcionarioModel = {
    nome: req.body.nome,
  };

  const funcionario = await funcionarioService.updateFuncionarioById(
    funcionarioModel,
    req.params.id
  );
  return res.status(200).json(funcionario);
});

export default router;
