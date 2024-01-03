import Home from "./firstpage";
import Food from "./secondPage";
import Contact from "./thirdPage";

const mainContainer = document.querySelector('#content');
const allLists = document.querySelectorAll('ul li a');
const arr = [Home(), Food(), Contact()];

mainContainer.appendChild(Home());

allLists.forEach(item => item.addEventListener('click', changingTab));

function changingTab(){
    mainContainer.removeChild(document.querySelector('.mainDiv'));
    arr[this.dataset.number].classList.add('active')
    mainContainer.appendChild(arr[this.dataset.number])
}
