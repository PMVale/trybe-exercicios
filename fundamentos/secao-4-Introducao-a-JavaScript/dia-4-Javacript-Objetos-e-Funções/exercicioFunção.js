const sum = (num1, num2) => num1 + num2; 
console.log(sum(5, 5));

const sub = (num1, num2) => num1 - num2; 
console.log(sub(5, 5));

const mult = (num1, num2) => num1 * num2; 
console.log(mult(5, 5));

const div = (num1, num2) => num1 / num2; 
console.log(div(5, 5));

const mod = (num1, num2) => num1 % num2; 
console.log(mod(5, 5));



function biggerNumber (num1, num2) {
  if (num1 > num2) {
    return `${num1} é maior que ${num2}`;
  } else if (num2 > num1) {
    return `${num2} é maior que ${num1}`;
  } else {
    return 'Os números são iguais'
  }
};

console.log(biggerNumber(10, 5));


function biggerNumber2 (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} é maior que ${num2} e ${num3}`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} é maior que ${num1} e ${num3}`;
  } else if (num3 > num1 && num3 > num2) {
    return `${num3} é maior que ${num1} e ${num2}`;
  } else {
    return 'Os números são iguais'
  }
};


console.log(biggerNumber2(25, 25, 25));




function type (number) {
  if (number > 0) {
    return 'Positive';
  } else if (number < 0) {
    return 'Negative';
  } else {
    return 'Zero'
  }
}

console.log(type(0));



function triangle (angle1, angle2, angle3) {
  let ifTriangle = true;
  if (angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    return ifTriangle;
  } else if (angle1 + angle2 + angle3 !== 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
    return !ifTriangle;
  } else {
    return 'Invalid';
  }
}

console.log(triangle(60, 60, 60));