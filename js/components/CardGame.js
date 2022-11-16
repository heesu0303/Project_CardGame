// html환경에서는 파일을 임포트해올때 .js를 생략하면 안됩니다.
import Component from "../core/Component.js";

class CardGame extends Component{
  constructor($target) {
    super($target)
  }
  
  template () {
    return ` 
    <h1 class="ir">피카츄 카드 뒤집기 게임</h1>
    <article class="sec-left">
      <h2 class="tit-score-board">스코어 보드</h2>
      <img class="img-main" src="" alt="메인이미지" />
      <ul class="list-score-board-content">
        <li>
          종합점수
          <p>총 승리 :</p>
          <p>총 패배 :</p>
        </li>
        <li>
          난이도별 점수
          <p>어려움 (8*8) : 64s</p>
          <p>중간 (6*6) : 54s</p>
          <p>쉬움 (4*4) : 32s</p>
        </li>
        <li>뒤집은 총 횟수 : <span class="txt-total-count">1565</span></li>
        <li>맞은 횟수 : <span class="txt-success-count">15</span></li>
        <li>틀린 횟수 : <span class="txt-wrong-count">155</span></li>
      </ul>
    </article>

    <article class="sec-right">
      <h2 class="tit-diff-board">난이도 설정</h2>
      <button class="btn-hard" type="button" data-level="8">8 X 8</button>
      <button class="btn-midium" type="button" data-level="6">6 X 6</button>
      <button class="btn-easy" type="button" data-level="4">4 X 4</button>
    </article>`
  }

  addEvent(){
    const $article = document.querySelector(".sec-right");
    $article.addEventListener("click",(event)=> {
      if(!(event.target.tagName === "BUTTON")){
        return;
      }
      this.paintCardGame(event.target.dataset.level);
    });
  }

  paintCardGame(level) {
    console.log(typeof(level));
    // level = 
    if (level === '8') {

    }
    

  }




  timer() {}
  flipCard() {}
  gotCard() {}
  replaceCard() {}
  hitScore() {}
  failScore() {}
}
export default CardGame;