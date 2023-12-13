class HtmlPageController {
  container;
  #Player;

  constructor(container, player) {
    this.container = container;
    this.#Player = player;
  }

  gameStart(tag) {
    tag.style.display = 'none';
    document.querySelector('img').src = '../../../img/Dungeon.png';
    this.setButton('들어가기', 'inDungeon');
    this.setPlayerStatus();
  }

  setButton(text) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(text));
    button.addEventListener('mouseup', this.setBattlePage);
    document.querySelector('#buttonLine').append(button);
  }

  setPlayerStatus() {
    let status = document.createElement('div');
    status.innerHTML = this.#Player.printStatus();
    status.id = 'playerStatus';

    document.querySelector('#userDisplay').append(status);
  }

  async getBattlePage() {
    return await (await fetch('../../../html/battleSlime.html')).text();
  }

  setBattlePage = async () => {
    let battlePage = await this.getBattlePage();

    document.querySelector('#container').innerHTML = battlePage;
    this.setPlayerStatus();
  };
}

export default HtmlPageController;
