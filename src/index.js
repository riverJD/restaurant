import './style.css';
import bird from './bluebird.png'
// Create website layout

console.log("Test")

const content = document.querySelector("#content");

const mainImage = new Image();
mainImage.src = bird;

const imageDiv = document.createElement('div');

imageDiv.id = 'main-image';

content.appendChild(imageDiv);

console.log(content);

const element = (type) => {

    return document.createElement(`${type}`);

}




content.textContent = "Hmm";

console.log(":)")
console.log(content)