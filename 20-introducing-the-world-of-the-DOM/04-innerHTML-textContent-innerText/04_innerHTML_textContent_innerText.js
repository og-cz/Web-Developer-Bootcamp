// Shows ONLY visible text (ignores hidden, display:none, opacity 0)
document.querySelector('p').innerText;

// Shows ALL text inside the element (even hidden or display: none)
document.querySelector('p').textContent;

// changes first p tag, text as = lololol
document.querySelector('p').innerText = 'lolololol';

// RETRIREVE FULL CONTENTS EVEN TAG NAME IN SHORT ALL IN THAT ELEMENT
document.querySelector('h1').innerHTML = '<i>new h1</i>'