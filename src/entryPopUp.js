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
            toDoForm.style.height='75%';
            // toDoForm.style.border='2px solid black';
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
            titleBoxHolder.style.height='20%';
            // titleBoxHolder.style.border='2px solid blue';
            titleBoxHolder.style.display='flex';
            titleBoxHolder.style.flexDirection='column';
            titleBoxHolder.style.alignItems='center';
            titleBoxHolder.appendChild(labelTitle);
            titleBoxHolder.appendChild(titleInput);
            titleBoxHolder.style.marginBottom='5%';
            toDoForm.appendChild(titleBoxHolder);
        }


        const selectId='selectId';
        const selectLabel= document.createElement('label');
            if(selectLabel){
                selectLabel.id=selectId;
                selectLabel.textContent='Category : ';
            }
        const selectDropdown = document.createElement('select');
            if(selectDropdown){
                selectDropdown.id=selectId;
                selectDropdown.style.width='70%';
                selectDropdown.placeholder='Select Category';
            }


        const empty = document.createElement('option');
            if(empty){
                empty.textContent='';
                selectDropdown.appendChild(empty);
            }


        const today = document.createElement('option');
            if(today){
                today.textContent='Today';
                today.value='today';
                selectDropdown.appendChild(today);
            }

        const thisWeek = document.createElement('option');
            if(thisWeek){
                thisWeek.textContent='This Week';
                thisWeek.value='thisWeek'
                selectDropdown.appendChild(thisWeek);
            }

        const thisMonth = document.createElement('option');
            if(thisMonth){
                thisMonth.textContent='This Month';
                thisMonth.value='thisMonth';
                selectDropdown.appendChild(thisMonth);
            }

        const thisYear = document.createElement('option');
            if(thisYear){
                thisYear.textContent='This Year';
                thisYear.value='thisYear';
                selectDropdown.appendChild(thisYear);
            }







        const selectBox= document.createElement('div');
            if(selectBox){
                selectBox.style.width='100%';
                selectBox.style.height='auto';
                selectBox.style.display='flex';
                selectBox.style.flexDirection='column';
                selectBox.style.alignItems='center';
                selectBox.appendChild(selectLabel);
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
            inputTaskDesc.placeholder='Describe your task here'
        }





    const taskDescBox = document.createElement('div');
        if(taskDescBox){
            taskDescBox.style.height='70%';
            taskDescBox.style.width='100%';
            taskDescBox.style.display='flex';
            taskDescBox.style.flexDirection='column';
            taskDescBox.style.alignItems='center';
            taskDescBox.appendChild(labelTaskDesc);
            taskDescBox.appendChild(inputTaskDesc);
            taskDescBox.style.margin='0';
            toDoForm.appendChild(taskDescBox);
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

            const newObject = new ToDos(titleValue,categoryValue,descriptionValue);
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
            console.log(all);
            console.log(todayCategory);
            console.log(weekCategory);
            console.log(monthCategory);
            console.log(yearCategory);
        })

}


export{addPopUp, all, todayCategory, weekCategory, monthCategory, yearCategory};