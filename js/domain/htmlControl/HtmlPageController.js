class HtmlPageController {
  #buttonLine;
  #userDisplay;
  #Player;

  constructor(buttonLine, userDisplay, player) {
    this.#buttonLine = buttonLine;
    this.#userDisplay = userDisplay;
    this.#Player = player;
  }

  gameStart(tag) {
    tag.style.display = 'none';
    document.querySelector('img').src = '../../../img/Dungeon.png';
    this.setButton('들어가기', 'inDungeon');
    this.setPlayerStatus();
  }

  setButton(text, id) {
    let button = document.createElement('button');
    button.id = id;
    button.appendChild(document.createTextNode(text));
    // button.addEventListener();
    this.#buttonLine.append(button);
  }

  setPlayerStatus() {
    let status = document.createElement('div');
    status.innerHTML = this.#Player.printStatus();
    status.id = 'playerStatus';

    document.querySelector('#userDisplay').append(status);
  }
}

export default HtmlPageController;
