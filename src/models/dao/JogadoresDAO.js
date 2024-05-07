const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  // Altere aqui para os seus jogadores
  new Jogador({ id: 1, nome: "Dionathan L. de Vargas", nickName: "dion.vargas", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 2, nome: "Frank G. Allen Vargas", nickName: "Kuxeru", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 3, nome: "Lauri Astala", nickName: "Bikuir", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 4, nome: "Bianka Wismer", nickName: "Estuyr", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 5, nome: "Baruch Papapanagiotou", nickName: "Viapus", classificacao: 0, estatisticas: 5, conquistas: [1, 5] }),
  new Jogador({ id: 6, nome: "Bernardo Bechi", nickName: "Ber.Bechi", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 7, nome: "Ronaldo Fenomeno", nickName: "Ronaldo.Fen", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 8, nome: "Ronaldinho Gaúcho", nickName: "Gaucho", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 9, nome: "Cristiano Ronaldo", nickName: "Ronaldo", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 10, nome: "Neymar JR", nickName: "Neymar.JR", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 11, nome: "Bruno Henrique", nickName: "Bru.Henrique", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 12, nome: "Gabriel Barbosa", nickName: "Gabigol", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 13, nome: "Sérgio Ramos", nickName: "Ramos", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 14, nome: "Leo Pereira", nickName: "Leo.P", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 15, nome: "Gustavo Lima", nickName: "Lima", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 16, nome: "Luan Santana", nickName: "L.Santana", classificacao: 0, estatisticas: 3, conquistas: [4] }),
  new Jogador({ id: 17, nome: "Ovosbia Flan", nickName: "Ovosbia", classificacao: 0, estatisticas: 4, conquistas: [3, 5] }),
  new Jogador({ id: 18, nome: "Simeo Fuwo", nickName: "Simeo", classificacao: 0, estatisticas: 1, conquistas: [1, 2, 3] }),
  new Jogador({ id: 19, nome: "Sayro Rasia", nickName: "Sayro", classificacao: 0, estatisticas: 2, conquistas: [5] }),
  new Jogador({ id: 20, nome: "Tuyus Nuol", nickName: "Nuol", classificacao: 0, estatisticas: 3, conquistas: [4] })

];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
