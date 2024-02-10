const game = document.querySelector('#game');

const input = document.createElement('input');

input.setAttribute('type','number')
input.setAttribute('placeholder','Enter the text')

const button = document.createElement('button');
button.classList.add('setnum');
button.textContent = 'Set the width';
button.addEventListener('click', function() {
    const inputvalue=input.value;
    console.log(inputvalue)
    for(let i=0;i<inputvalue*inputvalue;i++) {
    const div=document.createElement('div')

    div.classList.add('grid-item')
    container.appendChild(div)

}
});


game.appendChild(input)
game.appendChild(button);

const container= document.querySelector('#container');

