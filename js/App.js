import Player from './domain/player/Player.js';
import HtmlPageController from './domain/htmlControl/HtmlPageController.js';
import Monster from './domain/monster/Monster.js';

const T_START = document.querySelector('#start');
const T_CONTAINER = document.querySelector('#container');

class App {
  async play() {
    const PLAYER = new Player();
    const TAG_CONTROL = new HtmlPageController(T_CONTAINER, PLAYER);
    TAG_CONTROL.gameStart(T_START);

    let slime = new Monster('슬라임', 1, 50, 10, 0, 5);
  }
}

const APP = new App();
T_START.addEventListener('mouseup', APP.play);
