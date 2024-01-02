import Home from "./firstpage";
import secondPage from "./secondPage";

const mainContainer = document.querySelector('#content');
const allLists = document.querySelectorAll('ul li');
const funct = Home();
Home().classList.add('active')

mainContainer.append(funct)


allLists.forEach(item => item.addEventListener('click', () => {
    mainContainer.append(funct)
}))
