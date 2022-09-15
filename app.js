const score = document.querySelector('.current-score');
const mult1 = document.querySelector('.first-multiplier');
const mult2 = document.querySelector('.second-multiplier');
const answer = document.querySelector('.answer');
const input = document.querySelector('.text');
const submitBtn = document.querySelector('.btn');
const number1 = Number(Math.ceil(Math.random()*10));
const number2 = Number(Math.ceil(Math.random()*10)); 
const total = number1 * number2;
const question = document.querySelector('.question');
question.innerHTML = `What is ${number1} multiply by ${number2}?`
const newGameBtn = document.querySelector('.newGame');



/*   mult1.textContent = number1;
  mult2.textContent = number2;
 */

submitBtn.addEventListener('click', function(){
  if(input.value == ''){
    alert('Please provide a valid number!')
  } else if (input.value != total){
    answer.textContent = 'Wrong! Try Again!'
    score.innerHTML--;
  } else if (input.value == total){
    answer.textContent = 'You are right! NEXT!';
    score.innerHTML++;
    input.value = '';
    

  }
  
})


newGameBtn.addEventListener('click', function(){
  mult1.textContent = number1;
  mult2.textContent = number2;
})