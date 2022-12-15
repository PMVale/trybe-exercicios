function createHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    // header.innerHTML = 'Lorem Ipsum';
    const body = document.body;
    body.appendChild(header);
    // header.style.width = '100%'
    header.style.border = '1px solid black'
    // header.style.alignItems = 'center'
}

createHeader();

function headerItems(array) {
    const header = document.getElementById('header');
    for (let index = 0; index < array.length; index += 1) {
        const item = document.createElement('section');
        item.className = 'header-items';
        item.innerHTML = array[index];
        item.style.margin = '15px';
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.justifyContent = 'center';
        item.style.width = '13%';
        item.style.textAlign = 'center';
        header.appendChild(item);
    }
};

headerItems(['Cor de fundo', 'Cor da fonte', 'Tamanho da fonte', 'Espaçamento entre as linhas', 'Tipo da fonte']);

function itemsButtons(item, number, name) {
    const selectedItem = document.getElementsByClassName('header-items');
    for (let index = 0; index < number; index +=1) {
        const button = document.createElement('button');
        button.innerHTML = name[index];
        button.style.width = '50%';
        // button.style.alignContent = 'middle'
        // button.style.display = 'block';
        // button.style.verticalAlign = 'middle';
        selectedItem[item].appendChild(button);
    }
}

itemsButtons(0, 5, ['white', 'black', 'green', 'blue', 'yellow']);
itemsButtons(1, 3, ['black', 'red', 'white']);
itemsButtons(2, 5, ['8pt', '10pt', '12pt', '14pt', '20pt']);
itemsButtons(3, 5, ['1', 'normal', '1.5', '2.0', '3.0']);
itemsButtons(4, 2, ['Arial', 'Times New Roman']);