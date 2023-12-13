class BattleController {
  #battleService;
  constructor() {
    document.querySelector('#attack').addEventListener(() => this.attack());
    this.#battleService = new BattleService();
  }

  // 사용자랑 상호작용
  attack() {
    this.#battleService.attack();

    // 사용자한테 변경된 내용 업데이트
  }
}

// 사용자 <-(상호작용)-> Controller <-> Service (실제 로직) <-(데이터 영구 보관)-> Repository
