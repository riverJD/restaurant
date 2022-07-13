// Queries for menu items and stores as a JSON

const addDish = document.querySelector('form');
addDish.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const menuData = new FormData(addDish);

    const name = menuData.get('name');
    const description = menuData.get('description')
    const price = menuData.get('price');
    const note = menuData.get('note');
    

})