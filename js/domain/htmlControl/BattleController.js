class BattleController {
  #monsters;
  #player;
  #battleService;

  constructor() {}
}

// 사용자 <-(상호작용)-> Controller <-> Service (실제 로직) <-(데이터 영구 보관)-> Repository
export default BattleController;
