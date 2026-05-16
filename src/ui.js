import{sidebar} from "./sidebar.js";


let uiStructure = ()=>{



    let body = document.querySelector('body');
    let main = document.querySelector('main');
        if(main){
            main.classList.add('main');
            body.appendChild(main);
        }
    let toDoHolder = document.createElement('div');
        if(toDoHolder){
            toDoHolder.classList.add("toDoHolder");
            main.appendChild(sidebar);
            main.appendChild(toDoHolder);
            
        }

    



}


export{uiStructure};