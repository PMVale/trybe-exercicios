let grossSalary = 3000;
let netSalary;
let inssFirst = grossSalary * 0.08;
let inssSecond = grossSalary * 0.09;
let inssThird = grossSalary * 0.11;
let inssFourth = grossSalary - 570.88;
let taxFirst = 0;
let taxSecond = ((grossSalary - inssSecond) * 0.075) - 142.80;
let taxThird = ((grossSalary - inssThird) * 0.075) - 142.80;
let taxFourth = ((grossSalary - inssThird) * 0.15) - 354.80;
let taxFifth = ((grossSalary - inssThird) * 0.225) - 636.13;
let taxSixth = ((grossSalary - inssThird) * 0.275) - 869.36;
let taxSeventh = (inssFourth * 0.275) - 869.36;

if (grossSalary < 1556.95 && grossSalary - inssFirst < 1903.99) {
    netSalary = grossSalary - inssFirst - taxFirst;
    console.log(netSalary);
} else if (grossSalary >= 1556.95 && grossSalary < 2594.93  &&grossSalary - inssSecond < 1903.99) {
    netSalary = grossSalary - inssSecond - taxFirst;
    console.log(netSalary);
} else if (grossSalary >= 1556.95 && grossSalary < 2594.93  &&grossSalary - inssSecond >= 1903.99 && grossSalary - inssSecond < 2826.66) {
    netSalary = grossSalary - inssSecond - taxSecond;
    console.log(netSalary);
} else if (grossSalary >= 2594.93 && grossSalary < 5189.83  && grossSalary - inssThird >= 1903.99 && grossSalary - inssThird < 2826.66) {
    netSalary = grossSalary - inssThird - taxThird;
    console.log(netSalary);
} else if (grossSalary >= 2594.93 && grossSalary < 5189.83  &&grossSalary - inssThird >= 2826.66 && grossSalary - inssThird < 3751.06) {
    netSalary = grossSalary - inssThird - taxFourth;
    console.log(netSalary);
} else if (grossSalary >= 2594.93 && grossSalary < 5189.83  &&grossSalary - inssThird >= 3751.06 && grossSalary - inssThird < 4664.69) {
    netSalary = grossSalary - inssThird - taxFifth;
    console.log(netSalary);
} else if (grossSalary >=4664.68 && grossSalary < 5189.83 && grossSalary - inssThird >= 4664,69) {
    netSalary = grossSalary - inssThird - taxSixth;
    console.log(netSalary);
} else if (grossSalary >= 5189.83) {
    netSalary = grossSalary - taxSeventh;
    console.log(netSalary);
} else if (grossSalary < 0) {
    console.log('Error');
}

