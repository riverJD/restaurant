// Helper functions
// Restaurant page


const createElement = (type, attributes) => {
    
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    return newElement;
}

const getDate = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // Index at zero
    const yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

const formatPhone = (input) => {
    const phoneFormater = input;
    console.log
    phoneFormater.addEventListener('keyup', (e) => {

        // Remove anything that isn't a number
        let phoneNumber = phoneFormater.value.replace(/\D/g,'');
        
        let inputSize = phoneNumber.length;
        // Ignore delete/backspace so user can delete number 
        if (e.key == 'Backspace' || e.key == 'Delete') return;
        

        if (inputSize >= 3 && inputSize < 7 && e.key != 'Backspace'){
            phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3)
        }
        else if (inputSize >= 7){
            phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6)
        }


        phoneFormater.value = phoneNumber;
        phoneFormater.setCustomValidity('');
    })
    
}


function setAttributes(element, attributes)
{
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value)
    });
}




export {formatPhone, getDate, setAttributes, createElement as element};