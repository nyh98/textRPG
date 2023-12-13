class Player {
  #LV;
  #HP;
  #MAX_HP;
  #ATK;
  #DEF;
  #EXP;
  #MAX_EXP;

  constructor() {
    this.#LV = 1;
    this.#HP = 100;
    this.#ATK = 10;
    this.#DEF = 5;
    this.#EXP = 0;
    this.#MAX_EXP = this.#LV * 10;
    this.#MAX_HP = 100 + (this.#LV - 1) * 20;
  }

  attack() {
    return this.#ATK;
  }

  setHP(damage) {
    let resultDamage = damage - this.#DEF;
    if (resultDamage >= 0) {
      this.#DEF -= resultDamage;
    }
  }

  heals() {
    let firstHeal = 20;
    let heal = firstHeal + this.#LV * 5;
    if (this.#HP + 20 > this.#MAX_HP) {
      this.#HP = this.#MAX_HP;
    }
    this.#HP += heal;
  }

  printStatus() {
    return `주인공 스탯<br>레벨 : ${this.#LV}<br>체력 : ${this.#HP} / ${
      this.#MAX_HP
    }<br>공격력 : ${this.#ATK}<br>방어력 : ${this.#DEF}<br>경험치 : ${
      this.#EXP
    } / ${this.#MAX_EXP}`;
  }

  validateLevelUp() {
    if (this.#EXP >= this.#MAX_EXP) {
      this.#LV += 1;
      this.#MAX_HP += 20;
      this.#ATK += 10;
      this.#DEF += 5;
      this.#MAX_EXP += 10;
      this.#EXP = 0;
    }
  }

  validateDeath() {
    if (this.#HP <= 0) {
      alert('주인공 사망\n스탯 초기화');
      this.#LV = 1;
      this.#HP = 100;
      this.#ATK = 10;
      this.#DEF = 5;
      this.#EXP = 0;
      this.#MAX_EXP = this.#LV * 10;
      this.#MAX_HP = 100 + (this.#LV - 1) * 20;
    }
  }
}

export default Player;
