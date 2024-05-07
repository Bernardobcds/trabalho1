const Amizade = require("../models/amizade")
const AmizadesDAO = require('../models/dao/AmizadesDAO');
const JogadoresDAO = require("../models/dao/JogadoresDAO");

class AmizadesController {
  // Cria uma nova amizade (CREATE)
  create(req, res) {
    let amigos = req.body.amigos;

    let amizade = new Amizade({ amigos });
    let amizadeId = AmizadesDAO.criar(amizade);

    // Faz o response para o browser
    if (amizadeId)
      res.status(201).json({ amizade: AmizadesDAO.buscarPorId(amizadeId) })
    else
      res.status(500).json({ message: "Não foi possível criar um usuário" })
  }

  // Lista todas as amizades (READ)
  list(req, res) {
    // Copia o array amizadees
    let listaAmizades = AmizadesDAO.listar().slice()

    // Faz o response para o browser
    if (listaAmizades.length === 0)
      res.status(200).json({ message: "Nenhum amizade encontrado" })
    else {


      let listaAmizadesVerbose = []
      // Percorre o array listaJogadores
      for (let amizade of listaAmizades) {
        // Cria uma nova variável que recebe a versão com os dados principais de jogador
        let amizadeVerbose = JSON.parse(JSON.stringify(amizade));
        for (let i = 0; i < amizade.amigos.length; i++) {
          amizadeVerbose.amigos[i] = JogadoresDAO.buscarPorId(amizadeVerbose.amigos[i]).principal()
        }
        // Atribui o novo jogador ao novo array
        listaAmizadesVerbose.push(amizadeVerbose)
      }
      res.status(200).json({ amizades: listaAmizadesVerbose })
    }
  }

  // Mostrar um amizade (READ)
  show(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));

    // Faz o response para o browser
    if (amizade) {
      let amizadeVerbose = JSON.parse(JSON.stringify(amizade));
      for (let i = 0; i < amizade.amigos.length; i++) {
        amizadeVerbose.amigos[i] = JogadoresDAO.buscarPorId(amizadeVerbose.amigos[i]).principal()
      }

      res.status(200).json({ amizade: amizadeVerbose });
    } else {
      res.status(404).json({ message: 'Amizade não encontrado' });
    }
  }

  // Atualizar um amizade (UPDATE)
  update(req, res) {
    let id = req.params.id;
    let amizade = AmizadesDAO.buscarPorId(parseInt(id));
    if (amizade) {
      if (req.body.amigos) amizade.amigos = req.body.amigos

      // Atualiza a Amizade na persistência
      AmizadesDAO.atualizar(id, amizade)
      // Faz o response para o browser
      res.status(200).json({ amizade: amizade });
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Amizade não encontrado' });
    }
  }

  // Deleta uma amizade (DELETE)
  delete(req, res) {
    let id = parseInt(req.params.id);

    if (AmizadesDAO.exist(id)) {
      AmizadesDAO.deletar(id);

      // Faz o response para o browser
      res.status(200).send()
    }
    else {
      // Faz o response para o browser
      res.status(404).json({ message: 'Amizade não encontrado' });
    }
  }
}

module.exports = new AmizadesController();
