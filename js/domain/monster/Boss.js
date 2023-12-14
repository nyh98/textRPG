import Monster from './Monster.js';

class Boss extends Monster {
  turnCount = 0;

  attack() {
    console.log(this.name, this.ATK, this.test);
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

  setHP(damage) {
    let resultDamage = damage - this.DEF;
    if (resultDamage >= 0) {
      this.HP -= resultDamage;
    }
    this.validateDeath();
  }

  validateDeath() {
    if (this.HP <= 0) {
      alert('세상에 평화가 찾아왔다');
    }
    return 0;
  }
}

export default Boss;
