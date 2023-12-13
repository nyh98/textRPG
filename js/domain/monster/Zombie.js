import Monster from './Monster.js';

class Zombie extends Monster {
  squirtBlood() {
    let damage = 30;
    return damage;
  }
}

export default Zombie;
