import "./styles.css";
import {ui} from './ui.js';
import { sideBarUi } from "./sidebar.js";
import { titleBoxUi } from "./titleBox.js";
// import "./us.js";


console.log(ui());
let body = document.querySelector('body');
    if(body){
        body.classList.add('body');
    }
let main = document.querySelector('main');
    if(main){
        main.classList.add('main');
    }
console.log(sideBarUi());
console.log(titleBoxUi());