function Food(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    const firstElement = document.createElement('h1');
    firstElement.innerHTML = 'food';
    mainDiv.appendChild(firstElement);

    return mainDiv;
}

export default Food;