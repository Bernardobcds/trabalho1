class Mensagem {
  constructor({ id, texto, dataHora, remetente, destinatario }) {
    this.id = id ? id : -1;
    this.texto = texto;
    this.dataHora = dataHora ? dataHora : new Date();
    this.remetente = remetente;
    this.destinatario = destinatario;
  }
}

module.exports = Mensagem
