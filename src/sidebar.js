export {sideBarUi};
import { addProject } from "./addToDo.js";

let sideBarUi =()=>{
    let sidebar = document.querySelector('.sidebar')


    let profile = document.createElement('div');
        if(profile){
            profile.classList.add('profile');
            profile.textContent='This is a profile box';
        }
    let priorityChange = document.createElement('div');
        if(priorityChange){
            priorityChange.classList.add('priorityChange');
            priorityChange.textContent='This is a dropdown for priority';
        }
    let projectListButton = document.createElement('div');
        if(projectListButton){
            projectListButton.classList.add('projectListButton');
            projectListButton.textContent='Use this to change project view';
        }

    let addProjectButton = document.createElement('div');
        if(addProjectButton){
            addProjectButton.classList.add('addProjectButton');
            addProjectButton.textContent='Add Project';

        }

    if(sidebar){
        sidebar.appendChild(profile);
        sidebar.appendChild(priorityChange);
        sidebar.appendChild(projectListButton);
        sidebar.appendChild(addProjectButton);
        
    }
    console.log(addProject());



}