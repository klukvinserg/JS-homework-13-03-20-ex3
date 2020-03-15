let num1;
let num2;
let num3;

for (; true; ) {
  num1 = +prompt("Get number 1");

  if (!isNaN(num1) && num1 >= 1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

for (; true; ) {
  num2 = +prompt("Get number 2");

  if (!isNaN(num2) && num2 >= 1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

for (; true; ) {
  num3 = +prompt("Get number 3");

  if (!isNaN(num3) && num3 >= 1) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function resultNumber(a, b, c) {
  return (result = a.toString() + b.toString() + c.toString());
}

document.write(+resultNumber(num1, num2, num3));
