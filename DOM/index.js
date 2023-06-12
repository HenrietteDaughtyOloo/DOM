document.getElementById('heading').style.color='purple'
document.getElementById('heading').style.backgroundColor='#e2e2e2'

// document.getElementsByClassName=> has fewer methods.
document.getElementById('intro').innerHTML='My name is Henriette and I own My world. Iam 99 years old'
document.getElementById('intro').style.fontSize='25px';

//add another p class.
document.createElement('p');
let paragraph = document.createElement('p')
paragraph.innerHTML = 'I am new to coding'
document.getElementById('container').appendChild(paragraph)
// document.getElementById('container').removeChild(paragraph)
//check for children
let child = document.getElementById('container').children;
console.log({child});

//style the button
let button = document.getElementById('button')
button.addEventListener('click',function(){
    button.innerHTML = 'Clicked!!!!';
})

document.getElementById('container').setAttribute('class','containers')

