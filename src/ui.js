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




  
    let sortId='sortId';
    let sortLabel = document.createElement('label');
        if(sortLabel){
            sortLabel.id=sortId;
            sortLabel.textContent='Sort by Category : '
        }
    let sort = document.createElement('select');
        if(sort){
            sort.id=sortId;
            sort.classList.add('sort');

        }

    let empty = document.createElement('option');
        if(empty){
            empty.textContent='';
            sort.appendChild(empty);
        }

    let sortAll = document.createElement('option');
        if(sortAll){
            sortAll.value='all';
            sortAll.textContent='All';
            sort.appendChild(sortAll);
        }

    let sortToday = document.createElement('option');
        if(sortToday){
            sortToday.value='today';
            sortToday.textContent='Today';
            sort.appendChild(sortToday);
        }

    let sortWeek = document.createElement('option');
        if(sortWeek){
            sortWeek.value='week';
            sortWeek.textContent='This Week';
            sort.appendChild(sortWeek);
        }
    let sortMonth = document.createElement('option');
        if(sortMonth){
            sortMonth.value='month';
            sortMonth.textContent='This Month';
            sort.appendChild(sortMonth);
        }
    let sortYear = document.createElement('option');
        if(sortYear){
            sortYear.value='year';
            sortYear.textContent='This Year';
            sort.appendChild(sortYear);
        }

    let sortButton = document.createElement('button');
        if(sortButton){
            sortButton.textContent='Sort';
            sortButton.classList.add('sortButton');
        }

        sortButton.addEventListener('click', ()=>{
            
        })

    let sortBox = document.createElement('div');
        if(sortBox){
            sortBox.classList.add('sortBox');
            sortBox.appendChild(sortLabel);
            sortBox.appendChild(sort);
            sortBox.appendChild(sortButton);
            toDoHolder.appendChild(sortBox);
            
        }  




}


export{uiStructure};