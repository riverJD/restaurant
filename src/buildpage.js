import bird from './bluebird.png'
import blackbird from './blackbird.png'
import { element, getDate } from './utilities.js';
import { buildMenu }  from './menu.js';
import { buildContact} from './contact.js';
import { buildStory } from './story';
import { buildMain } from './main';
import buildFooter from './footer';



// Create website layout


// Create an element and assign any attributes


const build = (() => {

    const content = document.querySelector("#content");
    
    getDate();

    const buildHeader = () => {
        
        const titleText = "bluebird";
        const menuText = "menu";
        const contactText = "reservations";
        const storyText = "our story"

        const header = element('div', {"class": "header" })
        
        // sub-titles

        const title = element('button', {"class": "title", "id": "title-header"});
        const logo = element('div', {"class": "logo"});
        const menu = element('button', {"id": "menu-button", "class": "header-link"});
        const contact = element('button', {"id": "contact-button", "class": "header-link"});
        const story = element('button', {"id": "story-button", "class": "header-link"});
       
           
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
    
  

    const buildPage = (source) => {
        // clear page

       
        while (content.children.length > 1) content.removeChild(content.lastElementChild); 
        let page;
        
        if (source === 'menu'){
            page = buildMenu();   
           
        }
        if (source === 'contact'){
            page = buildContact();
        }
        if (source === 'story'){
            page = buildMain();
        }

        if (source === 'main'){
            page = buildMain();
        }

        
        content.appendChild(page);
        content.appendChild(buildFooter());
        
    }

    buildPage('main');
   
   

    // Construct footer for hours, contact info, etc


    
    return {buildPage}
// Creates a new element and flexibly assignes attributes;


})();



export default build;
