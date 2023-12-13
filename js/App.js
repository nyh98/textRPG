import Player from './domain/player/Player.js';
import HtmlPageController from './domain/htmlControl/HtmlPageController.js';
import Monster from './domain/monster/Monster.js';
import Zombie from './domain/monster/zombie.js';
import Host from './domain/monster/Host.js';
import Boss from './domain/monster/Boss.js';

const T_START = document.querySelector('#start');
const T_CONTAINER = document.querySelector('#container');

class App {
  async play() {
    const PLAYER = new Player();
    const MONSTERS = [];
    MONSTERS.push(
      new Monster('slime', 1, 50, 10, 0, 5),
      new Monster('skeleton', 2, 70, 15, 5, 8),
      new Zombie('zombie', 3, 90, 20, 10, 11),
      new Host('host', 4, 110, 25, 15, 14),
      new Boss('boss', 5, 130, 30, 20, null)
    );

    const TAG_CONTROL = new HtmlPageController(T_CONTAINER, PLAYER, MONSTERS);
    TAG_CONTROL.gameStart(T_START);
  }
}

const APP = new App();
T_START.addEventListener('mouseup', APP.play);
