let piece = 'Bishop';

switch (piece.toLowerCase()) {
    case 'bishop':
        console.log('diagonals');
        break;
    case 'pawn':
        console.log('straight');
        break;
    case 'knight':
        console.log('L shape');
        break;
    case 'tower':
        console.log('vertical and horizontal');
        break;
    case 'queen':
        console.log('unrestricted');
        break;
    case 'king':
        console.log('single unrestricted');
        break;
    default:
        console.log('error');
}

let teste = 'TESTE'
console.log(teste.toLowerCase());