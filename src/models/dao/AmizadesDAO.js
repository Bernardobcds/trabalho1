const Amigos = require("../amizade");

let amizades = [
    // Altere aqui para as suas Amigos
    new Amigos({ id: 1, amigos: [7, 10] }),
    new Amigos({ id: 2, amigos: [4, 8] }),
    new Amigos({ id: 3, amigos: [19, 3] }),
    new Amigos({ id: 4, amigos: [9, 6] }),
    new Amigos({ id: 5, amigos: [5, 13] }),
    new Amigos({ id: 6, amigos: [18, 2] }),
    new Amigos({ id: 7, amigos: [11, 14] }),
    new Amigos({ id: 8, amigos: [17, 12] }),
    new Amigos({ id: 9, amigos: [15, 20] }),
    new Amigos({ id: 10, amigos: [10, 14] }),
    new Amigos({ id: 11, amigos: [1, 2] }),
    new Amigos({ id: 12, amigos: [3, 4] }),
    new Amigos({ id: 13, amigos: [5, 6] }),
    new Amigos({ id: 14, amigos: [7, 8] }),
    new Amigos({ id: 15, amigos: [9, 10] }),
    new Amigos({ id: 16, amigos: [11, 12] }),
    new Amigos({ id: 17, amigos: [13, 14] }),
    new Amigos({ id: 18, amigos: [15, 16] }),
    new Amigos({ id: 19, amigos: [17, 18] }),
    new Amigos({ id: 20, amigos: [19, 20] })
]

class AmigosDAO {
    // Retorna a lista de Amigos
    listar() {
        return amizades;
    }

    // Retorna uma amigo filtrado pela sua id
    buscarPorId(id) {
        return amizades.find(amigo => amigo.id === id);
    }

    // Verifica se existe uma instância de Amigos com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena uma nova amigo
    criar(amigo) {
        amigo.id = amizades[amizades.length - 1].id + 1;
        amizades.push(amigo);
        return parseInt(amigo.id);
    }

    // Atualiza uma amigo
    atualizar(id, amigoAtualizado) {
        const index = amizades.findIndex(amigo => amigo.id === id);
        if (index !== -1) {
            amizades[index] = amigoAtualizado;
        }
    }

    // Deleta um amigo
    deletar(id) {
        const index = amizades.findIndex(amigo => amigo.id === id);
        if (index !== -1) {
            amizades.splice(index, 1);
        }
    }
}

module.exports = new AmigosDAO();
