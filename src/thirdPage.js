function Contact(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    const firstElement = document.createElement('h1');
    firstElement.innerHTML = 'Contact';
    mainDiv.appendChild(firstElement);

    return mainDiv;
}

export default Contact;