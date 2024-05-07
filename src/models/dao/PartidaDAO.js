const Partidas = require("../estatistica");
const Partidas = require("../partida");

let partidas = [
    // Altere aqui para as suas Partidas
    new Partidas({ id: 1, TimeVencedor: [1, 2, 3], TimePerdedor: [6, 4, 5], mvp: 1 }),
    new Partidas({ id: 2, TimeVencedor: [6, 5, 9], TimePerdedor: [2, 13, 12], mvp: 5 }),
    new Partidas({ id: 3, TimeVencedor: [10, 2, 20], TimePerdedor: [6, 4, 5], mvp: 10 }),
    new Partidas({ id: 4, TimeVencedor: [1, 15, 16], TimePerdedor: [2, 14, 20], mvp: 1 }),
    new Partidas({ id: 5, TimeVencedor: [8, 20, 13], TimePerdedor: [1, 5, 19], mvp: 8 }),
    new Partidas({ id: 6, TimeVencedor: [1, 5, 19], TimePerdedor: [8, 20, 13], mvp: 1 }),
    new Partidas({ id: 7, TimeVencedor: [1, 19, 8], TimePerdedor: [8, 20, 13], mvp: 1 }),
    new Partidas({ id: 8, TimeVencedor: [1, 3, 6], TimePerdedor: [8, 20, 13], mvp: 1 }),
    new Partidas({ id: 9, TimeVencedor: [10, 7, 6], TimePerdedor: [8, 20, 5], mvp: 10 }),
    new Partidas({ id: 10, TimeVencedor: [9, 20, 4], TimePerdedor: [6, 15, 15], mvp: 9 }),
    new Partidas({ id: 11, TimeVencedor: [4, 20, 5], TimePerdedor: [6, 8, 13], mvp: 4 }),
    new Partidas({ id: 12, TimeVencedor: [14, 2, 5], TimePerdedor: [6, 1, 13], mvp: 14 }),
    new Partidas({ id: 13, TimeVencedor: [17, 8, 7], TimePerdedor: [6, 18, 13], mvp: 17 }),
    new Partidas({ id: 14, TimeVencedor: [8, 6, 3], TimePerdedor: [2, 5, 13], mvp: 8 }),
    new Partidas({ id: 15, TimeVencedor: [10, 1, 12], TimePerdedor: [2, 16, 13], mvp: 10 }),
    new Partidas({ id: 16, TimeVencedor: [15, 2, 17], TimePerdedor: [18, 14, 10], mvp: 15 }),
    new Partidas({ id: 17, TimeVencedor: [9, 15, 7], TimePerdedor: [20, 19, 1], mvp: 7 }),
    new Partidas({ id: 18, TimeVencedor: [5, 20, 3], TimePerdedor: [7, 10, 4], mvp: 20 }),
    new Partidas({ id: 19, TimeVencedor: [3, 20, 13], TimePerdedor: [6, 12, 6], mvp: 3 }),
    new Partidas({ id: 20, TimeVencedor: [2, 12, 3], TimePerdedor: [16, 14, 7], mvp: 2 })
]

class PartidasDAO {
    // Retorna a lista de Partidas
    listar() {
        return partidas;
    }

    // Retorna uma estatistica filtrado pela sua id
    buscarPorId(id) {
        return partidas.find(partida => partida.id === id);
    }

    // Verifica se existe uma instância de Partidas com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena uma nova estatistica
    criar(partida) {
        partida.id = partidas[partidas.length - 1].id + 1;
        partidas.push(partida);
        return parseInt(partida.id);
    }

    // Atualiza uma estatistica
    atualizar(id, partidaAtualizado) {
        const index = partidas.findIndex(partida => partida.id === id);
        if (index !== -1) {
            partidas[index] = partidaAtualizado;
        }
    }

    // Deleta um estatistica
    deletar(id) {
        const index = partidas.findIndex(partida => partida.id === id);
        if (index !== -1) {
            partidas.splice(index, 1);
        }
    }
}

module.exports = new PartidasDAO();
