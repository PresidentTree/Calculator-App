let numArr = [];
let displayNum = 0;
let total = 0;
let num = 0;
let addition = false;
let subtract = false;
let divide = false;
let multiply = false;

//Numbers:
keys[8].onclick = function () {storNum(1);}
keys[9].onclick = function () {storNum(2);}
keys[10].onclick = function () {storNum(3);}
keys[4].onclick = function () {storNum(4);}
keys[5].onclick = function () {storNum(5);}
keys[6].onclick = function () {storNum(6);}
keys[0].onclick = function () {storNum(7);}
keys[1].onclick = function () {storNum(8);}
keys[2].onclick = function () {storNum(9);}
keys[13].onclick = function () {storNum(0);}
keys[12].onclick = function () {storNum(".");}

//Get number:
function storNum (number) {
  numArr.push(number);
  displayNum = numArr.join("");
  document.getElementById("calc").innerHTML = displayNum;
}

//Delete:
keys[3].onclick = function () {
  numArr.pop();
  displayNum = numArr.join("");
  if (displayNum == "") {
    displayNum = 0;
  }
  document.getElementById("calc").innerHTML = displayNum;
}

//Addition:
keys[7].onclick = function () {
  if (num == 0) {
    total = parseInt(displayNum);
  } else {
    total += parseInt(displayNum);
  }
  document.getElementById("calc").innerHTML = total;
  displayNum = 0;
  numArr = [];
  num = 1;
  addition = true;
  subtract = false;
  divide = false;
  multiply = false;
}

//Subtraction:
keys[11].onclick = function () {
  if (num == 0) {
    total = parseInt(displayNum);
  } else {
    total -= parseInt(displayNum);
  }
  document.getElementById("calc").innerHTML = total;
  displayNum = 0;
  numArr = [];
  num = 1;
  addition = false;
  subtract = true;
  divide = false;
  multiply = false;
}

//Division:
keys[14].onclick = function () {
  if (num == 0) {
    total = parseInt(displayNum);
  } else {
    total /= parseInt(displayNum);
  }
  document.getElementById("calc").innerHTML = total;
  displayNum = 0;
  numArr = [];
  num = 1;
  addition = false;
  subtract = false;
  divide = true;
  multiply = false;
}

//Multiplication:
keys[15].onclick = function () {
  if (num == 0) {
    total = parseInt(displayNum);
  } else {
    total *= parseInt(displayNum);
  }
  document.getElementById("calc").innerHTML = total;
  displayNum = 0;
  numArr = [];
  num = 1;
  addition = false;
  subtract = false;
  divide = false;
  multiply = true;
}

//Reset:
keys[16].onclick = function () {numArr = []; total = 0; num = 0; document.getElementById("calc").innerHTML = 0; addition = false; subtract = false; divide = false; multiply = false;}

//Equal:
keys[17].onclick = function () {
  if (addition) {
    total += parseInt(displayNum);
  }
  if (subtract) {
    total -= parseInt(displayNum);
  }
  if (divide) {
    total /= parseInt(displayNum);
  }
  if (multiply) {
    total *= parseInt(displayNum);
  }
  document.getElementById("calc").innerHTML = total;
  if (addition || subtract) {
    displayNum = 0;
  }
  if (divide || multiply) {
    displayNum = 1;
  }
}
