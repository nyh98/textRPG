import Monster from './Monster.js';

class Boss extends Monster {
  turnCount = 0;

  attack() {
    this.turnCount += 1;
    if (this.turnCount % 3 === 0) {
      return this.annoyingSkill();
    }
    return this.ATK;
  }

  annoyingSkill() {
    let damage = 50;
    return damage;
  }

  resetHP() {
    this.HP = this.initialHP;
    this.turnCount = 0;
  }

  setHP(damage) {
    let resultDamage = damage - this.DEF;
    if (resultDamage >= 0) {
      this.HP -= resultDamage;
    }
    this.validateDeath();
  }

  validateDeath() {
    if (this.HP <= 0) {
      return 1;
    }
    return 0;
  }
}

export default Boss;
