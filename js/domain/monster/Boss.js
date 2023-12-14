import Monster from './Monster.js';

class Boss extends Monster {
  setHP(damage) {
    let resultDamage = damage - this.DEF;
    if (resultDamage >= 0) {
      this.HP -= resultDamage;
    }
    if (this.HP <= 0) {
      alert('세상에 평화가 찾아왔다');
    }
  }
}

export default Boss;
