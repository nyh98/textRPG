const URL = {
  battlePage: '../../../html/battle.html',
  pickMonsterPage: '../../../html/pickMonster.html',
  dungeonIMG: '../../../img/Dungeon.png',
};

class HtmlPageController {
  container;
  Player;

  constructor(container, player) {
    this.container = container;
    this.Player = player;
  }

  gameStart(tag) {
    tag.style.display = 'none';
    document.querySelector('img').src = URL.dungeonIMG;
    this.setButton('들어가기', this.setPage, URL.pickMonsterPage);
    this.setPlayerStatus();
  }

  setButton(text, eventCallback, callbackParameter) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(text));
    button.addEventListener('mouseup', eventCallback(callbackParameter));
    document.querySelector('#buttonLine').append(button);
  }

  setPlayerStatus() {
    let status = document.querySelector('#playerStatus');
    status.innerHTML = this.Player.printStatus();
  }

  async getPage(url) {
    return await (await fetch(url)).text();
  }

  pickMonsterAddEvent() {
    let battle = Array.from(document.querySelectorAll('.goBattle'));
    battle.forEach((button) => {
      button.addEventListener('mouseup', async (e) => {
        console.log(e.target.id);
        let page = await this.getPage(URL.battlePage);
        this.container.innerHTML = page;
      });
    });
  }

  setPage = (url) => async () => {
    let Page = await this.getPage(url);

    this.container.innerHTML = Page;
    this.pickMonsterAddEvent();
  };
}

export default HtmlPageController;
