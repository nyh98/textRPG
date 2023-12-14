import HtmlPageController from './HtmlPageController.js';
const URL = {
  battlePage: '../../../html/battle.html',
  pickMonsterPage: '../../../html/pickMonster.html',
  dungeonIMG: '../../../img/Dungeon.png',
  endingPage: '../../../html/ending.html',
};
class BattleController {
  monster;
  player;
  monsters;
  HtmlPageController;

  constructor(monster, player, monsters) {
    this.monster = monster;
    this.player = player;
    this.monsters = monsters;
    this.HtmlPageController = new HtmlPageController(
      document.querySelector('#container'),
      this.player,
      this.monsters
    );
    this.setBattlePage();
    this.setAttackEvent();
  }

  setBattlePage() {
    this.setMonsterStatus();
    this.setPlayerStatus();
  }

  setMonsterStatus() {
    document.querySelector('#monsterStatus').innerHTML =
      this.monster.printStatus();
  }

  setPlayerStatus() {
    let status = document.querySelector('#playerStatus');
    status.innerHTML = this.player.printStatus();
  }

  attackTo(defenseTarget, attackTarget) {
    defenseTarget.setHP(attackTarget.attack());
    this.setBattlePage();
  }

  setAttackEvent() {
    document.querySelector('#attack').addEventListener('mouseup', () => {
      this.attackTo(this.monster, this.player);
      this.attackTo(this.player, this.monster);
      this.player.validateLevelUp(this.monster.validateDeath());
      this.setPlayerStatus();
      if (this.validateEnding()) return;
      this.validateBattleEnd();
      this.setPlayerStatus();
    });
  }

  validateBattleEnd() {
    if (this.monster.validateDeath() || this.player.validateDeath()) {
      this.HtmlPageController.setPage(URL.pickMonsterPage)();
      this.monster.resetHP();
    }
  }

  validateEnding() {
    if (this.monster.name === 'boss' && this.monster.validateDeath()) {
      this.HtmlPageController.setPage(URL.endingPage)();
      return true;
    }
  }
}

export default BattleController;
