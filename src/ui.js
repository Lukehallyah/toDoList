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

    let toDoTitle = document.createElement('h1');
        if(toDoTitle){
            toDoTitle.classList.add('toDoTitle');
            toDoTitle.textContent='ToDoList';
            toDoHolder.appendChild(toDoTitle);

        }






}


export{uiStructure};