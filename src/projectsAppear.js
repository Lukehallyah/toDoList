import { generalProjectArray } from "./addToDo.js"

// THE GOAL: 
// to take this array
// go through every single project in it
// create a div for it
// in that div make a title
// append that div to the taskHoldingBox

let makeProjectsAppear = ()=>{

    let taskHoldingBox = document.querySelector('.taskHoldingBox');
    taskHoldingBox.textContent='';

    for(let project of generalProjectArray){
    
        
        let projectDiv = document.createElement('div');
                projectDiv.classList.add('projectDiv');

        let projectTitle = document.createElement('h2');
                projectTitle.classList.add('projectTitle');
                projectTitle.textContent=project.projectName;

        projectDiv.appendChild(projectTitle);
        taskHoldingBox.appendChild(projectDiv);

    }
    
}

export {makeProjectsAppear};