import { element } from './utilities.js';
import farmData from './farm.jpg';
import birdData from './farmbird.jpg';


const buildMain = () => {


    const page = element('div', {"class": "page", "id": "main-page"})
    
    const pageHeader = element('h1', {"class": "menu-header", "id": "page-header"});
    pageHeader.textContent = "welcome to bluebird"

    // Create a section of content, with text and image (optional);    
    const createContent = (name, content, photo) => {

        const container = element('div', {"class": "page-content", 'id': `${name}-content`});
        const text = element('div', {"class": "text-content content", "id": `${name}-text`});
        text.textContent = content;

        if (photo != null){

            const picture = element('img', {"class": "photo", "id": `${name}-photo`, "src": photo})
            container.appendChild(picture);
        }
        
        container.appendChild(text);
        return container;
    }

    const farmtext = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden." 
    const test = createContent("test", "This is a test, did it work?");
    const farm = createContent("farm",farmtext, birdData);
    // farm contents
    /* const farmContent = element('div', {"class": 'page-content', "id": "farm-content"});
    const farm = element('img', {"class": "photo", "id": "farm-photo", "src": birdData});
    const farmText = element('div', {"class": "text-content content", "id": "farm-text"});
    farmText.textContent = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden."                
    farmContent.appendChild(farm);
    farmContent.appendChild(farmText); */
    
   
    page.appendChild(pageHeader);
    page.appendChild(farm);
    page.appendChild(test);
    page.id = "main-page";



    console.log(page);
    return page;

}

export {buildMain};