import menuData from './menu.json';
import { element } from './utilities.js';



//console.log(menuData.dishes);
const buildMenu = () => {
    
    const menu = element('div', {"id": "menu", "class": "page"});
    const menuHeader = element('h1', {"class": "menu-header"});
    menuHeader.textContent = "menu"

    // menu categories
    const starter = element('div', {"id": "starters"});
    const starterHeader = element('h2', {"id": "starter-header", "class": "menu-subheader"})
    starterHeader.textContent = "starter"

    const main = element('div', {"id": "mains"})
    const mainHeader = element('h2', {"id": "menu-header", "class": "menu-subheader"})
    mainHeader.textContent = "main"

    const dessert = element('div', {"id": "desserts"});
    const dessertHeader = element('h2', {"id": "menu-header", "class": "menu-subheader"})
    dessertHeader.textContent = "dessert";
  
    starter.appendChild(starterHeader);
    main.appendChild(mainHeader);
    dessert.appendChild(dessertHeader);

    menu.appendChild(menuHeader);
    menu.appendChild(starter);
    menu.appendChild(main);
    menu.appendChild(dessert);

    // read dish from JSON
    const buildDish = (item) => {

        const dish = element('div', {"class": "menu-dish "});
        const name = element('h3', {"class": "menu-name menu-item", "id": `menu-${item.name}`});
        const price = element('p', {"class": "menu-price menu-item"});
        const desc = element('p', {"class": "menu-description menu-item"});
        const note = element('p', {"class": "menu-note menu-item"});
        const symbol = element('div', {"class": "menu-symbol menu-item"});
        
        name.textContent = item.name;
        price.textContent = item.price;
        desc.textContent = item.description;
        note.textContent = item.note;
        symbol.classList.add(`${item.symbol}`)

        dish.appendChild(name);
        dish.appendChild(price);
        dish.appendChild(desc);
        dish.appendChild(note);
        dish.appendChild(symbol);

                
      

        return dish;
        
    }

    for (let item of menuData.dishes){

        // Attach menu items to appropriate category
        switch(item.type) {
           
  
            case 'starter':
                
                starter.appendChild(buildDish(item));
                continue;

            case 'main':
                main.appendChild(buildDish(item));
                continue;
            case 'dessert':
                console.log(item.description)
                dessert.appendChild(buildDish(item));
                continue;    
     
            default: 
            console.log("menu item did not match know category, verify dish type")
        
            break;
        }
}

return menu;

}

export {buildMenu}


