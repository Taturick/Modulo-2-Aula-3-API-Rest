let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const listarAulas = (req, res) => {
    return res.json(aulas);
}

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    // Verifique se o instrutor com o ID fornecido existe
    const existeInstrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!existeInstrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao,
    };
    aulas.push(aula);

    return res.status(201).json({ mensagem: 'Aula cadastrada', aula });
}

module.exports = {
    cadastrarAula,
    listarAulas
}
