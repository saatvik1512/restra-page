export default function Food(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    mainDiv.innerHTML = `<div class="second-container">
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div>
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div>
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div>
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div>
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div>
    <div class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Food"></div></div>`
    return mainDiv;
}