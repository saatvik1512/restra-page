export default function Home(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    mainDiv.classList.add('active')
    mainDiv.innerHTML = `<div class='first-container'><h1>Nothing brings <span>people</span> together like <span>Good</span>food</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg" alt="gordon ramsay">
    </div>`

    return mainDiv;
}
