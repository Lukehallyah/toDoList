import "./styles.css";
import {ui} from './ui.js';
import { sideBarUi } from "./sidebar.js";
import { addProject } from "./addToDo.js";
import { generalProjectArray } from "./addToDo.js";
// import { makeProjectsAppear } from "./projectsAppear.js";
let body = document.querySelector('body');
    if(body){
        body.classList.add('body');
    }
let main = document.querySelector('main');
    if(main){
        main.classList.add('main');
    }
console.log(ui());
console.log(sideBarUi());
// console.log(addProject());


// have to do this because Webpack Locks all your code away, ONLY FOR DEBUGGING
window.generalProjectArray=generalProjectArray;