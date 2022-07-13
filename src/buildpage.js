import bird from './bluebird.png'
import blackbird from './blackbird.png'
import { element } from './utilities.js';
import { buildMenu }  from './menu.js';
import { buildContact} from './contact.js';
import { buildStory } from './story';
import { buildMain } from './main';



// Create website layout


// Create an element and assign any attributes


const build = (() => {

    const content = document.querySelector("#content");
    

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
    
  

    const buildTemp = () => {

        const tempText = "Welcome to bluebird.";

        const second = " Et malesuada fames ac turpis egestas maecenas pharetra convallis. Arcu non sodales neque sodales. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.";

        const tempBig = "Mattis rhoncus urna neque viverra justo nec ultrices dui. At auctor urna nunc id cursus metus. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. " 
        const main = element('div', {"id": "main-content", "class": "main",});
        const mainText = element('div', {"id": "main-text", "class": "main",});
        const secondText = element('div', {"id": "second-text", "class": "main",});
        const bbird = element('img', {"width": "100px"});
        bbird.src = blackbird;

        mainText.textContent = tempBig;
        secondText.textContent = second;
        main.appendChild(mainText);
        main.appendChild(secondText);
        main.appendChild(bbird);

        return main;

    }

 

    const buildPage = (source) => {
        // clear page

        console.log(source)
        if (content.children.length > 1) content.removeChild(content.lastElementChild); 
        let page;
        
        if (source === 'menu'){
            page = buildMenu();   
           
        }
        if (source === 'contact'){
            page = buildContact();
        }
        if (source === 'story'){
            page = buildStory();
        }

        if (source === 'main'){
            page = buildMain();
        }


        content.appendChild(page);
        
    }

    buildPage('main');
   

    console.log(content);

    
    return {buildPage}
// Creates a new element and flexibly assignes attributes;


})();



export default build;
