// index.js

let paragraph = document.getElementById('paragraph');

console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');

console.log(links); 

let divs = document.getElementsByTagName('div');

console.log(divs);

// index.js

let paragraphId = paragraph.getAttribute('id');

paragraph.setAttribute('id', 'info-paragraph');

console.log(paragraph.id); // <== paragraph

let googleLink = document.getElementById("google-link")


googleLink.setAttribute('href', 'http://www.google.com')

googleLink.setAttribute('target', '_blank')

console.log(googleLink)


paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');
paragraph.removeAttribute('class')

console.log(paragraph)


// index.js
// ...

let h2Tag = document.createElement('h2');
// index.js
// ...

h2Tag.innerHTML = 'Elephant';

console.log(h2Tag); // <== <h2></h2>

// index.js
// ...
let parent = document.getElementsByTagName('body')[0];

parent.appendChild(h2Tag);

let text = document.createTextNode('This text is created dynamically  ');
 
parent.appendChild(text);

let newP = document.createElement('p')
let newText = document.createTextNode("Hi there! I am using JavaScript")

newP.appendChild(newText)

parent.appendChild(newP)

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 - comes before Heading 2';
parent.insertBefore(h1Tag, h2Tag);

let inputElement = document.createElement('input')

let button = document.getElementById("add-item-button")

parent.insertBefore(inputElement, button)

let toRemove = document.getElementById("remove")

parent.removeChild(toRemove)
parent.removeChild(h2Tag)

let contentDiv = document.getElementById('content');

contentDiv.innerHTML = `
<p>just created</p>
<p>number 2</p>
`; // clears the whole element

console.log(contentDiv.innerHTML)

let list = document.getElementById('items-list')

let counter = 1

button.onclick = function() {
    list.innerHTML += `<li>Item Number ${counter}</li>`
    counter++
    console.log('adding an element to the list');
  };


let input = document.getElementById('username')

input.onchange = function (e) {
    console.log(e.currentTarget.value)
}



console.log(input.value)


let secondButton = document.getElementById('send-btn')

secondButton.onclick = function() {

    console.log(input.value)

  };

//   let liTags = document.getElementsByTagName('li');
 
//   for (let i = 0; i < liTags.length; i++) {
//     liTags[i].onclick = function(e) {
//       console.log(e.currentTarget.innerHTML);
//     };
//   }

[...document.querySelectorAll('.list li')].forEach(li => {
    li.onclick = function (e) {
        let parentNode = document.getElementsByClassName('list')[0]
        console.log(parentNode)
        parentNode.removeChild(li)
      console.log(li);
    };
  });


// <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection
