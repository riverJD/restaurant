import bird from './bluebird.png'
import setAttributes from './utilities.js';

// Create website layout


// Create an element and assign any attributes
const element = (type, attributes) => {
    
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    return newElement;
}



const build = () => {

    const content = document.querySelector("#content");
    

    const buildHeader = () => {
        
        const titleText = "bluebird";
        const menuText = "menu";
        const contactText = "reservations";
        const storyText = "our story"

        const header = element('div', {"class": "header" })
        
        // sub-titles

        const title = element('div', {"class": "title", "id": "title-header"});
        const logo = element('div', {"class": "logo"});
        const menu = element('button', {"id": "menu-header", "class": "header-link"});
        const contact = element('button', {"id": "contact-header", "class": "header-link"});
        const story = element('button', {"id": "story-header", "class": "header-link"});
       
           
        title.textContent = titleText;
        menu.textContent = menuText;
        contact.textContent = contactText;
        story.textContent = storyText;

      
        // Logo
        
        //setAttributes(logo, {"class": "logo"})
        
        const mainImage = new Image();
        mainImage.src = bird;
        logo.appendChild(mainImage)


        
        header.appendChild(title);
        header.appendChild(logo);
        header.appendChild(menu);
        header.appendChild(contact);
        header.appendChild(story);
    
      

        return header;

    }
        
    content.appendChild(buildHeader())
    



    console.log(content);


// Creates a new element and flexibly assignes attributes;


}



export default build;
