
function resetButton(){
  score.losses = 0;
  score.ties = 0;
  score.wins = 0;
  localStorage.removeItem('score');/*lấy score ra khỏi bố nhớ*/
  updateScoreElem();

  document.querySelector('.js-result')
    .innerHTML = '';
  document.querySelector('.js-moves')
    .innerHTML = '';

}




    /*lấy giá trị của đối tượng score ra ngoài vì đã chuyển sang string nên dùng JSON.parse để trả lại kiểu ban đầu*/
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,/*lúc này nếu đã ấn reset thì trong bộ nhớ không còn score nên kết quả sẽ trả về NULL vậy score sẽ được gán bằng giá trị sau dấu ngoặc*/
    losses :0,/*lối tắt thay thế cho hàm if bên dưới*/
    ties : 0
  };


  updateScoreElem();


/*if(score === null) {
  score = {
    wins : 0,
    losses :0,
    ties : 0
  }
};*/

function playGame(playerMove){
  computerMove = pickcomputerMove();

  let result='';
  if(playerMove === 'scissors'){
    if(computerMove==='rock'){
      result='lose.';
    }
    else if(computerMove==='paper'){
      result='win.';
    }
    else{
      result='tie.'
    }

  }
  else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result=' Win.';
    }
    else if(computerMove==='paper'){
      result='tie.';
    }
    else{
      result='lose.'
    }
  }
  else{
    if(computerMove==='rock'){
  result='Tie.';
    }
    else if(computerMove==='paper'){
      result='lose.';
    }
    else{
      result='Win.'
    }
  }

  if(result === 'Win.'){
    score.wins ++;
  }
  else if(result === 'lose.'){
    score.losses ++;
  }
  else{
    score.ties ++;
  }

  updateScoreElem();
  
  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-moves')
    .innerHTML = ` YOU
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  localStorage.setItem('score',JSON.stringify(score));
  /*đưa đối tượng score vào bộ nhớ,tuy nhiên chỉ nhận string nên phải dùng JSON chuyển đối tượng sang string*/
 
}

function updateScoreElem(){
  document.querySelector('.js-score')
  .innerHTML =`wins:${score.wins},losses:${score.losses},ties:${score.ties}`; 
}
 

function pickcomputerMove(){
  const cutcc = Math.random();
let computerMove = '';
if(cutcc >=0 && cutcc <1/3){
  computerMove='rock';
}
else if(cutcc >=1/3 && cutcc <2/3){
  computerMove='paper';
}
else{
  computerMove='scissors';
}
return computerMove;
}