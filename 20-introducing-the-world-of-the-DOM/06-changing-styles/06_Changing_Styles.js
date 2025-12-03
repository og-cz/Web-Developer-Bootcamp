// this is how its inline in console 
let h1 = document.querySelector('h1')
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';

// how to do for all h1
let parags = document.querySelectorAll('p')
for (let p of parags) {
    p.style.color = 'gray';
};

let img = document.querySelector('img') // select first instance of the image
img.style.width = '150px';
img.style.borderRadius = '50%';