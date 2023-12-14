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
    this.setBattleLogic();
  }

  setBattleLogic() {
    this.setBattlePage();
    this.resetBattleLog();
    this.setAttackEvent();
    this.setRunAwayEvent();
    this.setSkillEvent();
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

  resetBattleLog() {
    document.querySelector('#battleLog').innerHTML = '';
  }

  attackTo(defenseTarget, attackTarget) {
    defenseTarget.setHP(attackTarget.attack());
    let skill = this.validateMonsterSkill(attackTarget);
    this.printBattleLog(`${attackTarget.getName()}의 ${skill}공격!`);
    this.setBattlePage();
  }

  printBattleLog(logMessage) {
    document.querySelector('#battleLog').innerHTML += `${logMessage}<br>`;
  }

  setAttackEvent() {
    document.querySelector('#attack').addEventListener('mouseup', () => {
      this.attackTo(this.monster, this.player);
      this.attackTo(this.player, this.monster);
      if (this.validateEnding()) return;
      this.player.validateLevelUp(this.monster.validateDeath());
      this.setPlayerStatus();
      this.validateBattleEnd();
      this.setPlayerStatus();
    });
  }

  setSkillEvent() {
    document.querySelector('#skill').addEventListener('mouseup', () => {
      this.player.heals();
      this.setPlayerStatus();
      this.printBattleLog(`${this.player.getName()} 회복스킬 사용`);
      this.attackTo(this.player, this.monster);
    });
  }

  setRunAwayEvent() {
    document.querySelector('#runAway').addEventListener('mouseup', () => {
      this.HtmlPageController.setPage(URL.pickMonsterPage)();
    });
  }

  validateMonsterSkill(monster) {
    let skill =
      this.monster.turnCount % 3 === 0 && monster === this.monster
        ? '스킬'
        : '';
    return skill;
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
