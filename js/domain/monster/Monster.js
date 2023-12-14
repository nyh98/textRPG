class Monster {
  name;
  LV;
  HP;
  ATK;
  DEF;
  EXP;

  constructor(name, LV, HP, ATK, DEF, EXP) {
    this.name = name;
    this.LV = LV;
    this.HP = HP;
    this.ATK = ATK;
    this.DEF = DEF;
    this.EXP = EXP;
    this.initialHP = HP;
  }

  attack() {
    return this.ATK;
  }

  setHP(damage) {
    let resultDamage = damage - this.DEF;
    if (resultDamage >= 0) {
      this.HP -= resultDamage;
    }
  }

  validateDeath() {
    if (this.HP <= 0) {
      return this.EXP;
    }
    return 0;
  }

  resetHP() {
    this.HP = this.initialHP;
  }

  printStatus() {
    return `${this.name}<br>레벨 : ${this.LV}<br>체력 : ${this.HP}<br>공격력 : ${this.ATK}<br>방어력 : ${this.DEF}<br>경험치 : ${this.EXP}`;
  }
}

export default Monster;
