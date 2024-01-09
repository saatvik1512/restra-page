export default function Home(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    mainDiv.classList.add('active')
    mainDiv.innerHTML = `<div class='first-container'><h1>Nothing brings people together like Good food</h1>
</div>`
    return mainDiv;
}
