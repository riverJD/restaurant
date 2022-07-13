import { element, formatPhone, getDate } from './utilities.js';

const buildContact = () => {

    const OPENTIME = "16:00";
    const CLOSETIME = "21:00";


    const page = element('div', {"class": "page"})


    // Create form
    const formContainer = element('div', {"id": "form-container"});
    const form = element('form', {"id": "reservation-form"});

    const nameLabel = element('label', {"for": "name", "class": "form-label"});
    nameLabel.textContent = "Full Name"
    const name = element('input', {"type": "text", "class": "form-input", "name": "name", "id": "form_name", "required": "", "placeholder": "John Smith" })
    nameLabel.appendChild(name);

    const dateLabel = element('label', {"for": "date", "class": "form-label"});
    dateLabel.textContent = "Date";
    const today = getDate();
    const date = element("input", {"type": "date", "class": "form-input", "name": "name", "id": "form_date", "min": today, "required": ""});
    dateLabel.appendChild(date);

    const timeLabel = element('label', {"for": "time", "class": "form-label"});
    timeLabel.textContent = "Time";
    const time = element('input', {"type": "time", "class": "form-input", "name": "time", "id": "form_time", "value": "16:00",  "min": OPENTIME, "max": CLOSETIME,"required": ""});
    timeLabel.appendChild(time);

    const phoneLabel = element('label', {"for": "phone", "class": "form-label"});
    phoneLabel.textContent = "Phone Number";
    const phone = element('input', {"type": "tel", "class": "form-input", "name": "phone", "id": "form_phone", "maxlength": 12, "placeholder": "555-210-3154", "required": ""})
    formatPhone(phone);
    phoneLabel.appendChild(phone);

    const submit = element("input", {"type": "submit", "class": "button", "id": "submit-button"});

    const submitModal = element("div", {"class": "modal hidden", "id": "submit-modal"});
    const modalContent = element("div", {"id": "modal-content"});
    const modalHeader = element("h2", {"class": "modal-item", "id": "submit-header"});
    const modalText = element("p", {"class": "modal-item", "id": "submit-text"});

    modalHeader.textContent = "Reservation Unavailible";
    modalText.textContent = "Please check again soon"
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    submitModal.appendChild(modalContent)
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        submitModal.style.display = 'flex';

    })
  
    // Attach form elements 
    form.appendChild(nameLabel);
    form.appendChild(dateLabel);
    form.appendChild(timeLabel);
    form.appendChild(phoneLabel);
    form.appendChild(submit);

 
    formContainer.appendChild(form);
    page.appendChild(formContainer);
    page.appendChild(submitModal);

    return page;
}

export {buildContact};