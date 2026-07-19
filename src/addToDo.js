import {CreateProject } from "./createProject.js";
import { makeProjectsAppear } from "./projectsAppear.js";

let generalProjectArray=[];

let addProject = ()=>{
    let addProjectButton = document.querySelector('.addProjectButton');
    let main = document.querySelector('main');
        addProjectButton.addEventListener('click', ()=>{

            // LOGIC FOR BRINGING UP PROJECT ADD FORM
            let addBox = document.createElement('div');
                if(addBox){
                    addBox.classList.add('addBox');
                }
            main.appendChild(addBox);

            let closeBox = document.createElement('div');
                if(closeBox){
                    closeBox.classList.add('closeBox');
                    closeBox.textContent='X';
                    addBox.appendChild(closeBox);
                }

                closeBox.addEventListener('click', ()=>{
                
                    main.removeChild(addBox);
                })
            
            let inputForm = document.createElement('form');
                if(inputForm){
                    inputForm.classList.add('inputForm');
                    addBox.appendChild(inputForm);
                }

            let projectNameTitle = document.createElement('h1');
                if(projectNameTitle){
                    projectNameTitle.classList.add('projectNameTitle');
                    projectNameTitle.textContent='What is the Name of your Project?';
                    inputForm.appendChild(projectNameTitle);
                }

            let projectFormLabel = document.createElement('label');
                if(projectFormLabel){
                    projectFormLabel.htmlFor="projectName";
                    projectFormLabel.textContent='Project Name : '; 
                    inputForm.appendChild(projectFormLabel);

                }

            let projectInput = document.createElement('input');
                if(projectInput){
                    projectInput.focus();
                    projectInput.classList.add('projectInput');
                    projectInput.placeholder='Your Project Name Here';
                    projectInput.id = 'projectName'
                    inputForm.appendChild(projectInput);


                }

            let projectNameSubmitButton =document.createElement('button');
                if(projectNameSubmitButton){
                    projectNameSubmitButton.classList.add('projectNameSubmitButton');
                    projectNameSubmitButton.textContent='Submit';
                    inputForm.appendChild(projectNameSubmitButton);
                }

                projectNameSubmitButton.addEventListener('click', (e)=>{
                    e.preventDefault();
                    let thisProjectName=projectInput.value;

                    let result = new CreateProject(thisProjectName);
                    generalProjectArray.push(result);
                    console.log(generalProjectArray);
                    console.log(makeProjectsAppear());


                    main.removeChild(addBox);
                })


        })

}

export {generalProjectArray};
export {addProject};

