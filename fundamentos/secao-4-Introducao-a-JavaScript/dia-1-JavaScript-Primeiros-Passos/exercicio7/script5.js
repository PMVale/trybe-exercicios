let value = 120;

if (value >= 90 && value <= 100) {
    console.log('A');
} else if (value >= 80 && value < 90) {
    console.log('B');
} else if (value >= 70 && value < 80) {
    console.log('C');
} else if (value >= 60 && value < 70) {
    console.log('D');
} else if (value >= 50 && value < 60) {
    console.log('E');
} else if (value < 50 && value >= 0) {
    console.log('F');
} else {
    console.log('Error');
}
