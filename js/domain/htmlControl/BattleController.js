import HtmlPageController from './HtmlPageController.js';
import URL from '../url/URL.js';

class BattleController {
  monster;
  player;
  HtmlPageController;

  constructor(monster, player, monsters) {
    this.monster = monster;
    this.player = player;
    this.HtmlPageController = new HtmlPageController(
      document.querySelector('#container'),
      this.player,
      monsters
    );
    this.setBattleLogic();
  }

  setBattleLogic() {
    let flag = true;
    this.setBattlePage();
    this.resetBattleLog();
    this.setAttackEvent(flag);
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

  setAttackEvent(flag) {
    document.querySelector('#attack').addEventListener('mouseup', async () => {
      if (flag) {
        flag = false;
        this.attackTo(this.monster, this.player);
        this.player.validateLevelUp(this.monster.validateDeath());
        if (this.validateBattleEnd() || this.validateEnding()) return;
        let promis = new Promise(resolve => {
          setTimeout(() => {
            this.attackTo(this.player, this.monster);
            resolve(true);
          }, 1000);
        });
        flag = await promis;
        this.setPlayerStatus();
        this.validateBattleEnd();
        this.setPlayerStatus();
      }
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
      return true;
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
