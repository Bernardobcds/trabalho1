const Mensagens = require("../mensagem");

let mensagens = [
    // Altere aqui para as suas Mensagens
    new Mensagens({ id: 1, texto: "blabla", dataHora: new Date('1980-12-17T03:24:00'), remetente: 7, destinatario: 10 }),
    new Mensagens({ id: 2, texto: "bla", dataHora: new Date('1990-12-17T03:24:00'), remetente: 4, destinatario: 8 }),
    new Mensagens({ id: 3, texto: "blablabla", dataHora: new Date('1991-12-17T03:24:00'), remetente: 19, destinatario: 3 }),
    new Mensagens({ id: 4, texto: "tra", dataHora: new Date('1992-12-17T03:24:00'), remetente: 9, destinatario: 6 }),
    new Mensagens({ id: 5, texto: "tratra", dataHora: new Date('1993-12-17T03:24:00'), remetente: 5, destinatario: 13 }),
    new Mensagens({ id: 6, texto: "tralala", dataHora: new Date('1994-12-17T03:24:00'), remetente: 18, destinatario: 2 }),
    new Mensagens({ id: 7, texto: "trala", dataHora: new Date('1995-12-17T03:24:00'), remetente: 11, destinatario: 14 }),
    new Mensagens({ id: 8, texto: "tretre", dataHora: new Date('1996-12-17T03:24:00'), remetente: 17, destinatario: 12 }),
    new Mensagens({ id: 9, texto: "trele", dataHora: new Date('1997-12-17T03:24:00'), remetente: 15, destinatario: 20 }),
    new Mensagens({ id: 10, texto: "trelele", dataHora: new Date('1998-12-17T03:24:00'), remetente: 10, destinatario: 14 }),
    new Mensagens({ id: 11, texto: "tritri", dataHora: new Date('1999-12-17T03:24:00'), remetente: 1, destinatario: 2 }),
    new Mensagens({ id: 12, texto: "trili", dataHora: new Date('1989-12-17T03:24:00'), remetente: 3, destinatario: 4 }),
    new Mensagens({ id: 13, texto: "trilili", dataHora: new Date('1988-12-17T03:24:00'), remetente: 5, destinatario: 6 }),
    new Mensagens({ id: 14, texto: "trutru", dataHora: new Date('1987-12-17T03:24:00'), remetente: 7, destinatario: 8 }),
    new Mensagens({ id: 15, texto: "trululu", dataHora: new Date('1986-12-17T03:24:00'), remetente: 9, destinatario: 10 }),
    new Mensagens({ id: 16, texto: "bleble", dataHora: new Date('1985-12-17T03:24:00'), remetente: 11, destinatario: 12 }),
    new Mensagens({ id: 17, texto: "ble", dataHora: new Date('1984-12-17T03:24:00'), remetente: 13, destinatario: 14 }),
    new Mensagens({ id: 18, texto: "bli", dataHora: new Date('1983-12-17T03:24:00'), remetente: 15, destinatario: 16 }),
    new Mensagens({ id: 19, texto: "blo", dataHora: new Date('1982-12-17T03:24:00'), remetente: 17, destinatario: 18 }),
    new Mensagens({ id: 20, texto: "blu", dataHora: new Date('1981-12-17T03:24:00'), remetente: 19, destinatario: 20 })
]

class MensagensDAO {
    // Retorna a lista de Mensagens
    listar() {
        return mensagens;
    }

    // Retorna uma mensagem filtrado pela sua id
    buscarPorId(id) {
        return Mensagens.find(mensagem => mensagem.id === id);
    }

    // Verifica se existe uma instância de Mensagens com aquele id
    exist(id) {
        return this.buscarPorId(id) ? true : false;
    }

    // Cria e armazena uma nova mensagem
    criar(mensagem) {
        mensagem.id = Mensagens[Mensagens.length - 1].id + 1;
        Mensagens.push(mensagem);
        return parseInt(mensagem.id);
    }

    // Atualiza uma mensagem
    atualizar(id, mensagemAtualizado) {
        const index = Mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            Mensagens[index] = mensagemAtualizado;
        }
    }

    // Deleta um mensagem
    deletar(id) {
        const index = Mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            Mensagens.splice(index, 1);
        }
    }
}

module.exports = new MensagensDAO();
