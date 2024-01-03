export default function Home(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    mainDiv.classList.add('active')
    mainDiv.innerHTML = "<h1>This is page 1</h1>"

    return mainDiv;
}
