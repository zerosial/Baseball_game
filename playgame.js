let answer = Math.floor(Math.random() * (900)) + 100 + "";
let a;
let b;
let c;
let gamestart = 1;
let showText = 4;


const input = document.querySelector('input');
const form = document.querySelector('#form');
const thElement = document.querySelectorAll('th');

function baseBallGame(inputValue) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < 3; i++){
    if (inputValue[i] === answer[i])
    strikeCount += 1;
    else if (inputValue[i] === answer[i+1])
    ballCount += 1;
    else if (inputValue[i] === answer[i+2])
    ballCount += 1;
  }
  alert (`스트라이크 : ${strikeCount}, 볼 : ${ballCount}`);
    thElement[showText].innerText = gamestart-1;
    thElement[showText+1].innerText = strikeCount;
    thElement[showText+2].innerText = ballCount;
    let outCount = 3 - (strikeCount +  ballCount);
    thElement[showText+3].innerText = ballCount;
    showText += 4;
}


form.addEventListener('submit', function(e){
  let inputValue = input.value;
  a = inputValue[0];
  b = inputValue[1];
  c = inputValue[2];
  let over = inputValue[3];
  if (over !== undefined)
    alert(`4글자 이상입니다.`);
  else if (isNaN(a+b+c) === true)
    alert(`숫자가 아닙니다.`);
  else{
    gamestart = gamestart + 1;
    baseBallGame(inputValue);
    if (inputValue === answer){
      alert('정답을 맞췄습니다.')
      window.location.reload()
    }
    else if (gamestart === 11){
      alert('10회 이상 틀렸습니다. 게임이 재시작됩니다.')
      window.location.reload()
    }
  }
  e.preventDefault();
});