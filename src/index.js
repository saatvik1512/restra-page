import Home from "./firstpage";
import Food from "./secondPage";
import Contact from "./thirdPage";

const mainContainer = document.querySelector('#content');
const allLists = document.querySelectorAll('ul li a');
const arr = [Home(), Food(), Contact()];

mainContainer.appendChild(Home());

allLists.forEach(item => item.addEventListener('click', () => {
    mainContainer.removeChild(document.querySelector('.mainDiv'));
    mainContainer.appendChild(arr[item.dataset.number])
    arr[item.dataset.number].classList.add('active')
}))
