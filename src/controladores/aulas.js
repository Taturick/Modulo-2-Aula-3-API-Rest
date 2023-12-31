let { identificadorAula, instrutores, aulas } = require("../bancodedados");

const listarAulas = (req, res) => {
  return res.json(aulas);
};
const obterAula = (req, res) => {
  const { id } = req.params;
  const aula = aulas.find((aula) => {
    return aula.id === Number(id);
  });

  if (!aula) {
    return res.status(404).json({ mensagem: "Aula não encontrada." });
  }
  return res.status(200).json(aula);
};
const obterAulasInstrutor = (req, res) => {
  const { idInstrutor } = req.params;
  
  const existeInstrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!existeInstrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }
  const aulasInstrutor = aulas.filter((aula) => {
    return aula.instrutor_id === existeInstrutor.id;
  });

  return res.status(200).json(aulasInstrutor);
};

const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  // Verifique se o instrutor com o ID fornecido existe
  const existeInstrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(idInstrutor);
  });

  if (!existeInstrutor) {
    return res.status(404).json({ mensagem: "Instrutor não encontrado." });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao,
  };
  aulas.push(aula);

  return res.status(201).json({ mensagem: "Aula cadastrada", aula });
};

module.exports = {
  cadastrarAula,
  listarAulas,
  obterAula,
  obterAulasInstrutor
};
