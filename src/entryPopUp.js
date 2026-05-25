import{ToDos} from './toDoClass.js';
const all = [];
const todayCategory =[];
const weekCategory=[];
const monthCategory =[];
const yearCategory=[];




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
            toDoForm.style.height='90%';
            toDoForm.style.borderTop='5px solid grey';
            toDoForm.style.display='flex';
            toDoForm.style.flexDirection='column';
            toDoForm.style.alignItems='center';
            popUp.appendChild(toDoForm);
        }

    const titleId="taskTitle";
    const labelTitle= document.createElement('label');
        if(labelTitle){
            labelTitle.style.width='25%';
            labelTitle.style.height='100%';
            labelTitle.textContent="Title"
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
            titleBoxHolder.style.height='15%';
            titleBoxHolder.style.display='flex';
            titleBoxHolder.style.flexDirection='column';
            titleBoxHolder.style.alignItems='center';
            titleBoxHolder.appendChild(labelTitle);
            titleBoxHolder.appendChild(titleInput);
            titleBoxHolder.style.marginBottom='5%';
            toDoForm.appendChild(titleBoxHolder);
        }


        // const selectId='selectId';
        const selectDropdown = document.createElement('select');
            if(selectDropdown){
                // selectDropdown.id=selectId;
                selectDropdown.style.width='70%';
                selectDropdown.placeholder='Select Category';
            }


        const empty = document.createElement('option');
            if(empty){
                empty.textContent='Choose a category . . .';
                empty.value = '';
                // empty.disabled=true;
                empty.selected=true;
                // empty.hidden=true;
                selectDropdown.appendChild(empty);
            }


        const today = document.createElement('option');
            if(today){
                today.textContent='Daily Goals';
                today.value='today';
                selectDropdown.appendChild(today);
            }

        const thisWeek = document.createElement('option');
            if(thisWeek){
                thisWeek.textContent='Weekly Goals';
                thisWeek.value='thisWeek'
                selectDropdown.appendChild(thisWeek);
            }

        const thisMonth = document.createElement('option');
            if(thisMonth){
                thisMonth.textContent='Monthly Goals';
                thisMonth.value='thisMonth';
                selectDropdown.appendChild(thisMonth);
            }

        const thisYear = document.createElement('option');
            if(thisYear){
                thisYear.textContent='Yearly Goals';
                thisYear.value='thisYear';
                selectDropdown.appendChild(thisYear);
            }


        const selectBox= document.createElement('div');
            if(selectBox){
                selectBox.style.width='100%';
                selectBox.style.height='5%';
                selectBox.style.display='flex';
                selectBox.style.flexDirection='column';
                selectBox.style.alignItems='center';
                // selectBox.appendChild(selectLabel);
                selectBox.appendChild(selectDropdown);
                toDoForm.appendChild(selectBox);
            }






    const taskId = "taskId";
    const labelTaskDesc = document.createElement('label');
        if(labelTaskDesc){
            labelTaskDesc.htmlFor=taskId;
            labelTaskDesc.textContent='Task Description';
            labelTaskDesc.style.fontSize='1.25rem';
            labelTaskDesc.style.textAlign='center';
        }
    const inputTaskDesc = document.createElement('textarea');
        if(inputTaskDesc){
            inputTaskDesc.id=taskId;
            inputTaskDesc.style.height='60%';
            inputTaskDesc.style.width='80%';
            inputTaskDesc.placeholder='Describe your task here';
        }





    const taskDescBox = document.createElement('div');
        if(taskDescBox){
            taskDescBox.style.height='auto';
            taskDescBox.style.width='100%';
            taskDescBox.style.display='flex';
            taskDescBox.style.flexDirection='column';
            taskDescBox.style.alignItems='center';
            taskDescBox.appendChild(labelTaskDesc);
            taskDescBox.appendChild(inputTaskDesc);
            taskDescBox.style.margin='0';
            toDoForm.appendChild(taskDescBox);
        }


    const notesID = 'notesID';
    const labelNotes = document.createElement('label');
        if(labelNotes){
            labelNotes.htmlFor=notesID;
            labelNotes.textContent='Notes : ';
            labelNotes.style.textAlign='center';
            labelNotes.style.height='15%';
        }        
    const notesInput = document.createElement('textarea');
        if(notesInput){
            notesInput.id = notesID;
            notesInput.style.width='80%';
            notesInput.style.height='85%';
            notesInput.placeholder='Write any goals, thoughts, ideas, and things you may not want to forget here...';
        }
    const notesBox = document.createElement('div');
        if(notesBox){
            notesBox.style.height='45%';
            notesBox.style.width='100%';
            notesBox.style.display='flex';
            notesBox.style.flexDirection='column';
            notesBox.style.alignItems='center';
            notesBox.appendChild(labelNotes);
            notesBox.appendChild(notesInput);
            toDoForm.appendChild(notesBox);
        }

    const submitButton = document.createElement('button');
        if(submitButton){
            submitButton.style.width='25%';
            submitButton.style.height='auto';
            submitButton.textContent='Submit';
            submitButton.style.display='flex';
            submitButton.style.justifyContent='center';
            toDoForm.appendChild(submitButton);

            
        }


        submitButton.addEventListener('click', (e)=>{
            e.preventDefault();
            let titleValue = titleInput.value;
            let categoryValue = selectDropdown.value;
            let descriptionValue=inputTaskDesc.value;
            let notesValue = notesInput.value;

            const newObject = new ToDos(titleValue,categoryValue,descriptionValue, notesValue);
            all.push(newObject);
                if(categoryValue==='today'){
                    todayCategory.push(newObject);
                }
                else if(categoryValue==='thisWeek'){
                    weekCategory.push(newObject);
                }
                else if(categoryValue==='thisMonth'){
                    monthCategory.push(newObject);
                }
                else if(categoryValue==='thisYear'){
                    yearCategory.push(newObject);
                }
            

            main.removeChild(popUp);
        })

}


export{addPopUp, all, todayCategory, weekCategory, monthCategory, yearCategory};