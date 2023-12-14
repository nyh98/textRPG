import Monster from './Monster.js';

class Zombie extends Monster {
  turnCount = 0;

  attack() {
    this.turnCount += 1;
    if (this.turnCount % 3 === 0) {
      return this.squirtBlood();
    }
    return this.ATK;
  }

  squirtBlood() {
    let damage = 30;
    return damage;
  }
}

export default Zombie;
