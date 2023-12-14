import Monster from './Monster.js';

class Host extends Monster {
  turnCount = 0;

  attack() {
    this.turnCount += 1;
    if (this.turnCount % 3 === 0) {
      return this.stillDeposit();
    }
    return this.ATK;
  }

  resetHP() {
    this.HP = this.initialHP;
    this.turnCount = 0;
  }

  stillDeposit() {
    let damage = 40;
    return damage;
  }
}

export default Host;
