import { element } from './utilities.js';
import storyData from './story.txt';
import tableImg from './table.jpg';


const buildStory = () => {

    const page = element('div', {"id": "story-page"});

    const table = new Image();
    table.src = tableImg;
    table.id = "table-image";
    table.classList.add("pictures");

    page.appendChild(table);

    const story = element('div');
   
    story.textContent = storyData;

    page.appendChild(story);

    return page;
}


export {buildStory};


