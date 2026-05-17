let addPopUp = ()=>{

    let main = document.querySelector('main');
    let popUp = document.createElement('div');
        if(popUp){
            popUp.classList.add('popUp');
            main.appendChild(popUp);

        }



    const buttonHolder = document.createElement('div');
        if(buttonHolder){
            buttonHolder.classList.add('buttonHolder');
            popUp.appendChild(buttonHolder);
        }
    const removeButton = document.createElement('div');
        if(removeButton){
            removeButton.classList.add('removeButton');
            buttonHolder.appendChild(removeButton);
        }

    removeButton.addEventListener('click', ()=>{

        main.removeChild(popUp);
    })




    const title = document.createElement('p')
        if(title){
            title.classList.add('title');
            title.textContent='Add a New Task!';
            title.style.fontWeight='600';
            popUp.appendChild(title);
        }

    const toDoForm = document.createElement('form');
        if(toDoForm){
            toDoForm.style.width='100%';
            toDoForm.style.height='75%';
            toDoForm.style.border='2px solid black';
            toDoForm.style.display='flex';
            toDoForm.style.flexDirection='column';
            popUp.appendChild(toDoForm);
        }

    const titleId="taskTitle";
    const labelTitle= document.createElement('label');
        if(labelTitle){
            labelTitle.style.width='25%';
            labelTitle.style.height='100%';
            labelTitle.textContent="Title : "
            labelTitle.style.fontSize='1.5rem';
            labelTitle.style.display='flex';
            labelTitle.style.alignItems='center';
            labelTitle.style.justifyContent='center';
            labelTitle.htmlFor=titleId;
        }
    const titleInput = document.createElement('input');
        if(titleInput){
            titleInput.style.width='70%';
            titleInput.style.height='100%';
            titleInput.id=titleId;
            titleInput.placeholder='Enter task title here...'

        }        
    const titleBoxHolder= document.createElement('div');
        if(titleBoxHolder){
            titleBoxHolder.style.width='100%';
            titleBoxHolder.style.height='20%';
            // titleBoxHolder.style.border='2px solid blue';
            titleBoxHolder.style.display='flex';
            titleBoxHolder.appendChild(labelTitle);
            titleBoxHolder.appendChild(titleInput);
            toDoForm.appendChild(titleBoxHolder);
        }


    const taskId = "taskId";
    const labelTaskDesc = document.createElement('label');
        if(labelTaskDesc){
            labelTaskDesc.htmlFor=taskId;
            labelTaskDesc.textContent='Task Description';
            labelTaskDesc.style.fontSize='1.25rem';
            labelTaskDesc.style.textAlign='left';
        }
    const inputTaskDesc = document.createElement('textarea');
        if(inputTaskDesc){
            inputTaskDesc.id=taskId;
            inputTaskDesc.style.height='60%';
            inputTaskDesc.style.width='80%';
            inputTaskDesc.style.paddingLeft='10%';
        }




    const taskDescBox = document.createElement('div');
        if(taskDescBox){
            taskDescBox.style.height='80%';
            taskDescBox.style.width='100%';
            taskDescBox.style.border='2px solid green';
            taskDescBox.style.display='flex';
            taskDescBox.style.flexDirection='column';
            taskDescBox.appendChild(labelTaskDesc);
            taskDescBox.appendChild(inputTaskDesc);
            toDoForm.appendChild(taskDescBox);
        }

}


export{addPopUp}