import { generalProjectArray } from "./addToDo.js"

// THE GOAL: 
// to take this array
// go through every single project in it
// create a div for it
// in that div make a title
// append that div to the taskHoldingBox

let makeProjectsAppear = ()=>{
    let main =document.querySelector('main');
    let taskHoldingBox = document.querySelector('.taskHoldingBox');
    taskHoldingBox.textContent='';

    for(let project of generalProjectArray){
    
        
        let projectDiv = document.createElement('div');
                projectDiv.classList.add('projectDiv');


        let addToDo = document.createElement('div');
                addToDo.classList.add('addToDo');
                addToDo.textContent='+';

            addToDo.addEventListener('click', ()=>{

                        let toDoDiv = document.createElement('div')
                                toDoDiv.classList.add('toDoDiv');
                                main.appendChild(toDoDiv);


                        let newToDoForm = document.createElement('form');
                                newToDoForm.classList.add('newToDoForm');
                                newToDoForm.style.width='100%';
                                newToDoForm.style.height='100%';
                                newToDoForm.style.border='2px solid black';
                                toDoDiv.appendChild(newToDoForm);


                        let closeBox = document.createElement('div');
                                if(closeBox){
                                    closeBox.classList.add('closeBox');
                                    closeBox.textContent='X';
                                    newToDoForm.appendChild(closeBox);
                                }
                        closeBox.addEventListener('click', ()=>{
                            
                                main.removeChild(toDoDiv);
                            })
                        

                        let newToDoQuestion = document.createElement('h3');
                            newToDoQuestion.textContent="Create a Task for this Project";
                            newToDoQuestion.style.textAlign='center';
                            newToDoForm.appendChild(newToDoQuestion);

                        // SO THE NEXT THING THAT NEEDS TO HAPPEN IS: 
                        //     CREATE AN INPUT FOR TODOTASK TITLE -CHECK
                        //     CREATE AN INPUT FOR A DESCRIPTION OF THAT TASK - CHECK
                        //     CREATE A DUE DATE FOR EACH TODOTASK
                        //     CREATE AND SORT BY PRIORITY(LOW, MEDIUM, HIGH - THESE CAN BE PROPERTIES OF THE OBJECT, A DROPDOWN CHOICE)
                        //     CREATE A SUBMIT BUTTON THAT MAKES THIS AN OBJECT THAT APPENDS TO THE SPECIFIC OBJECT ARRAY

                        let toDoTitle = document.createElement('input');
                                toDoTitle.classList.add('toDoTitle');
                                toDoTitle.id='toDoTitle';

                        let toDoTitleLabel = document.createElement('label');
                                toDoTitleLabel.htmlFor='toDoTitle';
                                toDoTitleLabel.textContent='Enter Task Title : '


                        let toDoTitleBox = document.createElement('div');
                                toDoTitleBox.style.width='100%';
                                toDoTitleBox.style.height='auto';
                                toDoTitleBox.style.display='flex';
                                toDoTitleBox.style.justifyContent='flex-end';
                                toDoTitleBox.style.alignItems='center';
                                toDoTitleBox.appendChild(toDoTitleLabel);
                                toDoTitleBox.appendChild(toDoTitle);
                                newToDoForm.appendChild(toDoTitleBox);



                        let toDoDesc = document.createElement('input');
                                toDoDesc.classList.add('toDoDesc');
                                toDoDesc.id='toDoDesc';

                        let toDoDescLabel = document.createElement('label');
                                toDoDescLabel.htmlFor='toDoDesc';
                                toDoDescLabel.textContent='Enter Task Description : '


                        let toDoDescBox = document.createElement('div');
                                toDoDescBox.style.width='100%';
                                toDoDescBox.style.height='auto';
                                toDoDescBox.style.display='flex';
                                toDoDescBox.style.justifyContent='flex-end';
                                toDoDescBox.style.alignItems='center';
                                toDoDescBox.appendChild(toDoDescLabel);
                                toDoDescBox.appendChild(toDoDesc);
                                newToDoForm.appendChild(toDoDescBox);      
                                
                                
                        let toDoSubmit = document.createElement('button');
                                toDoSubmit.classList.add('toDoSubmit');
                                toDoSubmit.textContent='Submit';

                            toDoSubmit.addEventListener('click', (e)=>{
                                e.preventDefault();
                                main.style.backgroundColor='blue';
                            })

                        let holdSubmit = document.createElement('div');
                                holdSubmit.style.width='100%';
                                holdSubmit.style.height='2rem';
                                holdSubmit.style.display='flex';
                                holdSubmit.style.justifyContent='center';
                                holdSubmit.style.alignItems='center';
                                holdSubmit.appendChild(toDoSubmit);
                                newToDoForm.appendChild(holdSubmit);

                        

                
            
            })

            let buttonHold = document.createElement('div');
                    buttonHold.classList.add('buttonHold');
                    buttonHold.appendChild(addToDo);


            let projectTitle = document.createElement('h2');
                    projectTitle.classList.add('projectTitle');
                    projectTitle.textContent=project.projectName;

            projectDiv.appendChild(buttonHold);

            projectDiv.appendChild(projectTitle);
            taskHoldingBox.appendChild(projectDiv);

    }
    
}

export {makeProjectsAppear};