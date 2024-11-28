import express from "express";
import agendamentoController from "./AgendamentoController.js";
import disponibilidadeController from "./DisponibilidadeController.js";
import especialidadeController from "./EspecialidadeController.js";
import pacienteController from "./PacienteController.js";
import funcionarioController from "./FuncionarioController.js";

let router = express.Router();

router.get("/", function (req, res) {
  console.log("oi");
});

router.use("/", agendamentoController);
router.use("/", disponibilidadeController);
router.use("/", especialidadeController);
router.use("/", pacienteController);
router.use("/", funcionarioController);

export default router;
