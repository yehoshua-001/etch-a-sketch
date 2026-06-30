const container = document.querySelector('#container');
const squares = 16 * 16;

for(i = 0; i < squares; i++){
    const content = document.createElement('div');
    content.classList.add('squares');
    container.appendChild(content);
}