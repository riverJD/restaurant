import bird from './bluebird.png'
import setAttributes from './utilities.js';

// Create website layout


const build = () => {

    const content = document.querySelector("#content");
    

    const buildHeader = () => {
        const header = document.createElement('div');
        
        // sub-titles
        const logo = element('div', {"class": "logo"});
        const menu = element('div');
        
        setAttributes(header, {"id": 'header'});
        content.appendChild(header);

        // Logo
        
        //setAttributes(logo, {"class": "logo"})
        
        const mainImage = new Image();
        mainImage.src = bird;
        logo.appendChild(mainImage)


        
        
        header.appendChild(logo);
    
    

    }
        

    buildHeader();



    console.log(content);


// Creates a new element and flexibly assignes attributes;
const element = (type, attributes) => {
    const newElement = document.createElement(`${type}`);
    setAttributes(newElement, attributes);
}





export default build;
