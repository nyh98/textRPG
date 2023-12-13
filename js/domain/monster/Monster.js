class Monster {
  LV;
  HP;
  ATK;
  DEF;
  EXP;

  constructor(LV, HP, ATK, DEF, EXP) {
    this.LV = LV;
    this.HP = HP;
    this.ATK = ATK;
    this.DEF = DEF;
    this.EXP = EXP;
  }

  attack() {
    return this.ATK;
  }

  setHP(damage) {
    let resultDamage = damage - this.DEF;
    if (resultDamage >= 0) {
      this.DEF -= resultDamage;
    }
  }

  validateDeath() {
    if (this.HP <= 0) {
      return this.EXP;
    }
  }
}
