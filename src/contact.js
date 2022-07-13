import { element } from './utilities.js';

const buildContact = () => {

    console.log('contact page')
    const page = element('div');
    page.textContent = "TEST TEST TEST";


    return page;
}

export {buildContact};