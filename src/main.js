import { element } from './utilities.js';



const buildMain = () => {

    
    const page = element('div', {"class": "page", "id": "main-page"})
    const pageHeader = element('h1', {"class": "menu-header", "id": "page-header"});

    pageHeader.textContent = "Welcome to bluebird"

    page.appendChild(pageHeader)
    console.log(page);
    return page;

}

export {buildMain};