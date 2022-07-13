import { element } from './utilities.js';
import tableDData from './table.jpg';
import birdData from './farmbird.jpg';
import farmTextData from './farmtext.txt';
import welcomeTextData from './welcome.txt';


const buildMain = () => {


    const page = element('div', {"class": "page", "id": "main-page"})
    
    const pageHeader = element('h1', {"class": "menu-header", "id": "page-header"});
    pageHeader.textContent = "welcome to bluebird"

    // Create a section of content, with text and image (optional);    
    // Elements will be dynamically clased and id based on name.  
    // content is a source of text content for the section
    // firstElement is string name of element which will be placed to the left
    const createContent = (name, content, photo, firstElement) => {

        const container = element('div', {"class": "page-content", 'id': `${name}-content`});
        const text = element('div', {"class": "text-content content", "id": `${name}-text`});
        text.textContent = content;


        container.appendChild(text);

        if (photo != null){
            const picture = element('img', {"class": "photo", "id": `${name}-photo`, "src": photo})
            
            if (firstElement === 'photo'){
                container.insertBefore(picture, text);
            }
            else {
            container.appendChild(picture);
            }


        }
        else{
            container.classList.add("no-photo");
            
        }
        
      

    
        //container.appendChild(text);
        return container;
    }

    const welcome = createContent("welcome", welcomeTextData);
    const table = createContent("table", "Our space is very limited, and reservations are required. Please call ahead if you have any specific dietary restrictions.", tableDData)
    const farm = createContent("farm",farmTextData, birdData, "photo");
    // farm contents
    /* const farmContent = element('div', {"class": 'page-content', "id": "farm-content"});
    const farm = element('img', {"class": "photo", "id": "farm-photo", "src": birdData});
    const farmText = element('div', {"class": "text-content content", "id": "farm-text"});
    farmText.textContent = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden."                
    farmContent.appendChild(farm);
    farmContent.appendChild(farmText); */
    
   
    page.appendChild(pageHeader);
    page.appendChild(welcome);
    page.appendChild(farm);
    page.appendChild(table);
    page.id = "main-page";



    console.log(page);
    return page;

}

export {buildMain};