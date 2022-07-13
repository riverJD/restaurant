import { element } from './utilities.js';

const buildContact = () => {

    const formContainer = element('div', {"id": "form-container"});
    const form = element('form', {"id": "reservation-form"});

    const nameLabel = element('label', {"for": "name", "class": "form-label"});
    nameLabel.textContent = "Full Name:"
    const name = element('input', {"type": "text", "class": "form-input", "name": "name", "id": "form_name", "placeholder": "John Smith" })
    nameLabel.appendChild(name);

    const dateLabel = element('label', {"for": "date", "class": "form-label"});
    dateLabel.textContent = "Date:";
    const date = element("input", {"type": "date", "class": "form-input", "name": "name", "id": "form_date",});
    dateLabel.appendChild(date);



    form.appendChild(nameLabel);
    form.appendChild(dateLabel);

    console.log('contact page')
    const page = element('div', {"class": "page"})
    formContainer.appendChild(form);
    page.appendChild(formContainer);

    return page;
}

export {buildContact};