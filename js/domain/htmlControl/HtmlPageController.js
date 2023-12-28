import BattleController from './BattleController.js'
import URL from '../url/URL.js'

class HtmlPageController {
  container
  player
  monsters

  constructor(container, player, monsters) {
    this.container = container
    this.player = player
    this.monsters = monsters
  }

  gameStart(tag) {
    tag.style.display = 'none'
    document.querySelector('img').src = URL.dungeonIMG
    this.setButton('들어가기', this.setPage, URL.pickMonsterPage)
    this.setPlayerStatus()
  }

  setButton(text, eventCallback, callbackParameter) {
    let button = document.createElement('button')
    button.appendChild(document.createTextNode(text))
    button.addEventListener('mouseup', eventCallback(callbackParameter))
    document.querySelector('#buttonLine').append(button)
  }

  setPlayerStatus() {
    let status = document.querySelector('#playerStatus')
    status.innerHTML = this.player.printStatus()
  }

  pickMonsterPageAddEvent() {
    let battle = Array.from(document.querySelectorAll('.goBattle'))
    battle.forEach(button => {
      button.addEventListener('mouseup', async e => {
        let page = await this.getPage(URL.battlePage)
        this.container.innerHTML = page
        for (let monster of this.monsters) {
          if (monster.name === e.target.id) {
            new BattleController(monster, this.player, this.monsters)
          }
        }
      })
    })
  }

  async getPage(url) {
    return await (await fetch(url)).text()
  }

  setPage = url => async () => {
    let Page = await this.getPage(url)

    this.container.innerHTML = Page
    if (url === URL.pickMonsterPage) {
      this.pickMonsterPageAddEvent()
    }
  }
}

export default HtmlPageController
