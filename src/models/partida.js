class Partidas {
  constructor({ id, timeVencedor, timePerdedor, mvp }) {
    this.id = id ? id : -1;
    this.timeVencedor = timeVencedor
    this.timePerdedor = timePerdedor
    this.mvp = mvp
  }
}

module.exports = Partidas
