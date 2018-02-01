class Calculator{
  static plus(firstNumber, secondNumber){
    return firstNumber + secondNumber;
  }
  static minus(firstNumber, secondNumber){
    return firstNumber - secondNumber;
  }
  static divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
  }
  static multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
  }
}

document.querySelectorAll('.main button').forEach( el => el.addEventListener('click', numPressed));

let $result = document.getElementsByClassName("result")[0];

function numPressed(ev){
  const num = ev.target.innerText;
  $result.innerText += num;
  if(num === "="){
    if($result.innerText.includes('+')){
      $result.innerText = Calculator.plus(parseInt($result.innerText[0]), parseInt($result.innerText[2]));
    } else if($result.innerText.includes('-')){
      $result.innerText = Calculator.minus(parseInt($result.innerText[0]), parseInt($result.innerText[2]));
    } else if($result.innerText.includes('/')){
      $result.innerText = Calculator.divide(parseInt($result.innerText[0]), parseInt($result.innerText[2]));
    } else if($result.innerText.includes('*')){
      $result.innerText = Calculator.multiply(parseInt($result.innerText[0]), parseInt($result.innerText[2]));
    }
  }
  if(num === "delete"){
    $result.innerText = "";
  }
}
