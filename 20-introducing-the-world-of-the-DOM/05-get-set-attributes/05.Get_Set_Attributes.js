// getAttribute() lets you read the value of an attribute from an HTML element. [src  alt  id  class  type  name  href  style]
const firstLink = document.querySelector('p')

firstLink.getAttribute('class') // return parags

document.querySelector('input[type="text"]') // returns

let h1 = document.querySelector('h1');
console.log(h1.getAttribute('id')); 
// → "banner"

let img1 = document.querySelector('.imgs');
console.log(img1.getAttribute('src'));
// → https://images.pexels.com/photos/2134180/pexels-photo-2134180.jpeg

let p1 = document.querySelector('.parags');
console.log(p1.getAttribute('class'));
// → "parags"

let input = document.querySelector('input');
console.log(input.getAttribute('name'));  
// → "username"

// setAttribute() allows you to change an attribute.
// Change image source
img1.setAttribute('src', 'https://picsum.photos/300');
// Add a new class
p1.setAttribute('class', 'parags highlighted');
// Change input type
input.setAttribute('type', 'password');
// Change the <h1> id
h1.setAttribute('id', 'newBanner');
