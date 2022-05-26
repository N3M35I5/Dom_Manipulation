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


