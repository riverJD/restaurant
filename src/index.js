import './style.css';
import build from './buildpage.js';
import menu from './menu.json';
// Create website layout


build();

/// Move to seperate module, dynamically loads menu items

const main = document.querySelector("#main-content");
const menuContent = document.createElement("div");
const name = document.createElement("h2");
const description = document.createElement("p");
const price = document.createElement('div');
const note = document.createElement('div');

const dish = menu.dishes[0];

name.textContent = dish.dish;
description.textContent = dish.description;
price.textContent = dish.price;
note.textContent = dish.note;

menuContent.appendChild(name);
menuContent.appendChild(description);
menuContent.appendChild(price);
menuContent.appendChild(note);

main.appendChild(menuContent);

