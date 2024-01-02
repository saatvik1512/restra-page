function Home(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    const firstElement = document.createElement('h1');
    firstElement.innerHTML = 'Animal I have become';
    mainDiv.appendChild(firstElement);

    return mainDiv;
}

export default Home;