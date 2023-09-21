const bancoDeDados = {
  identificadorInstrutor: 3,
  identificadorAula: 2,
  instrutores: [
    {
      id: 1,
      nome: "Rick",
      email: "rick@email.com",
      status: true,
    },
    {
      id: 2,
      nome: "tatu",
      email: "tatu@email.com",
      status: true,
    },
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      titulo: "Primeiro servidor",
      descricao: "Construindo o primeiro servidor",
    },
  ],
};

module.exports = bancoDeDados;
