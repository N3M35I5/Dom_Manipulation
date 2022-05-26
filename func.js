// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redContent = document.createElement('p');
redContent.textContent='Hey I’m red!';
redContent.style.cssText= 'color: red;';
container.appendChild(redContent);

const blueContent = document.createElement('h3');
blueContent.textContent='I’m a blue h3!';
blueContent.style.color='blue';
container.appendChild(blueContent);

const divContainer = document.createElement('div');
divContainer.setAttribute('style','border-color: black;background-color: pink;');
container.appendChild(divContainer);

const divh1 = document.createElement('h1');
divh1.textContent='I’m in a div';
divContainer.appendChild(divh1);

const divp = document.createElement('p');
divp.textContent = 'ME TOO!';
divContainer.appendChild(divp);

// Method 2 Limitation : only 1 onClick propertyper element
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//Method 3 - We can add multiple listeners if needed - much more flexible
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

///////////////////////////////With Helper Function
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  const btn3 = document.querySelector('#btn3');
  btn3.onclick = alertFunction;

  const btn4 = document.querySelector('#btn4');
  btn4.addEventListener('click', alertFunction);

  //callback thing
  const btn5 = document.querySelector('#btn5');
  btn5.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
  /*btn5.addEventListener('click', function (e) {
    console.log(e.target);
  });*/