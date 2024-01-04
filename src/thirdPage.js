export default function Contact(){
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainDiv');
    mainDiv.innerHTML = `<div class="sub-container"><h1>Phone Number</h1>
<p>1122338888</p> <p>0569-2345678</p>
<h1>Address</h1> <p>345, plot-A, Aurobindo Nagar</p> <p>House A, Madras Cafe, Chennai</p></div>`

    return mainDiv;
}