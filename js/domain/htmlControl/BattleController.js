class BattleController {
  monster;
  player;

  constructor(monster, player) {
    this.monster = monster;
    this.player = player;
    this.setBattlePage();
  }

  setBattlePage() {
    document.querySelector('#monsterStatus').innerHTML =
      this.monster.printStatus();
  }
}

export default BattleController;
