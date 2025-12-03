// getElementsByTagName gets all instances of the object with a tagname
let imgCounts = document.getElementsByTagName('img')
console.log(imgCounts.length) // 3
console.dir(imgCounts[0]) // shows img #1

for (let i = 0; i < imgCounts.length; i++) {
    console.log(imgCounts[i].src);
    imgCounts[i].src = 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg'; // changes all images to this 
}

console.log(document.getElementsByTagName('p')) // returns 3

// getElementsByClassName - gets all instances of object with a class
console.log(document.getElementsByClassName('parags'))
console.log(document.getElementsByClassName('imgs'))