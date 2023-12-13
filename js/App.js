import Player from './domain/player/Player.js';
import HtmlPageController from './domain/htmlControl/HtmlPageController.js';

const T_START = document.querySelector('#start');
const T_LINE = document.querySelector('#buttonLine');
const T_DISPLAY = document.querySelector('#userDisplay');

class App {
  async play() {
    const PLAYER = new Player();
    const TAG_CONTROL = new HtmlPageController(T_LINE, T_DISPLAY, PLAYER);
    TAG_CONTROL.gameStart(T_START);
  }
}

const APP = new App();
T_START.addEventListener('mouseup', APP.play);
