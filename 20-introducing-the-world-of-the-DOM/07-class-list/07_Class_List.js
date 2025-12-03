// we setted this up based from html-css not its color purple
let p = document.querySelector('p');
p.setAttribute('class', 'purple');


// classList is a DOMTokenList basically an array-like object that contains all the classes on an element
let h1 = document.querySelector('h1');
h1.classList.add('red')
h1.classList.add('border')

h1.classList.toggle('border'); // can turn and turn off using this