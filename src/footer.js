import { createImageLink, element} from './utilities.js'
import info from './footer.json';
import gitlogo from './github.png';
import river from './riv.png';


const buildFooter = () => {

    // container
    const footer = element('footer', {"id": "footer"});
    const footerContent = element('div', {"id": "footer-content"});
    const links = element('div', {"id": "footer-links"});
    
    // hours information
    const hours = element('table', {"id": "footer-hours"});
    for (let days of info.hours){
  
        const day = element('tr', {"class": "hours-info", "id": `hours-${days.day}`, "colspan": "2"});
        let time = element('td');
        
        day.innerHTML= `<b>${days.day}</b>`

        time.textContent = days.open;
        day.appendChild(time);

        time = element("td");

        time.textContent = days.close;
        day.appendChild(time);
        hours.appendChild(day);
    }
    footerContent.appendChild(hours);

    //contact information
    const phone = element("div", {"id": "phone-number"});
    phone.innerHTML = `Call us at <b>555-201-5312</b>`;
    
    footerContent.appendChild(phone);

    // Create links
    const rivLink = createImageLink("https://riverjd.github.io/admin-page/", river, "river's admin page");
    const footerNote = element("div", {"id": "footer-note"})
    footerNote.textContent = "river ©2022"
    const gitLink = createImageLink("https://github.com/riverJD/", gitlogo, "river's github");
    links.appendChild(rivLink);
    links.appendChild(footerNote)
    links.appendChild(gitLink);
    footerContent.appendChild(links);
    footer.appendChild(footerContent);

    return footer;
    
}


export default buildFooter;