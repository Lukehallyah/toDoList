import{sidebar} from "./sidebar.js";
import{all, todayCategory, weekCategory, monthCategory, yearCategory} from './entryPopUp.js';
import { ToDos } from "./toDoClass.js";


let uiStructure = ()=>{

let removedToDo = [];


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
            sortWeek.textContent='Weekly Goals';
            sort.appendChild(sortWeek);
        }
    let sortMonth = document.createElement('option');
        if(sortMonth){
            sortMonth.value='month';
            sortMonth.textContent='Monthly Goals';
            sort.appendChild(sortMonth);
        }
    let sortYear = document.createElement('option');
        if(sortYear){
            sortYear.value='year';
            sortYear.textContent='Yearly Goals';
            sort.appendChild(sortYear);
        }

    let sortButton = document.createElement('button');
        if(sortButton){
            sortButton.textContent='Sort';
            sortButton.classList.add('sortButton');
        }


    let sortBox = document.createElement('div');
        if(sortBox){
            sortBox.classList.add('sortBox');
            sortBox.appendChild(sortLabel);
            sortBox.appendChild(sort);
            sortBox.appendChild(sortButton);
            toDoHolder.appendChild(sortBox);
            
        }  

    

    let cardHolder= document.createElement('div');
        if(cardHolder){
            cardHolder.classList.add('cardHolder');
            toDoHolder.appendChild(cardHolder);
        }


    function createCard(obj){
        console.log(obj);

        

        let removeObj= document.createElement('div');
            if(removeObj){
                removeObj.style.display='flex';
                removeObj.style.justifyContent='center';
                removeObj.style.width='8%';
                removeObj.textContent='X';
                removeObj.style.border='2px solid black';
            };

        let buttonHolder= document.createElement('div');
            if(buttonHolder){
                buttonHolder.style.height='6%';
                buttonHolder.style.width='100%';
                buttonHolder.style.display='flex';
                buttonHolder.style.justifyContent='right';
                buttonHolder.appendChild(removeObj);

            }

            buttonHolder.addEventListener('click', ()=>{
                cardHolder.removeChild(card);
                let index = all.findIndex(item=>item.id===obj.id);
                let index2 = todayCategory.findIndex(item=>item.id===obj.id);
                let index3 = weekCategory.findIndex(item=>item.id===obj.id);
                let index4 = monthCategory.findIndex(item=>item.id===obj.id);
                let index5 = yearCategory.findIndex(item=>item.id===obj.id);

                let wasDeleted = false;
                if(index!==-1){
                    all.splice(index,1);
                    console.log('This Item has been removed');
                    wasDeleted=true;
                }
                if(index2!==-1){
                    todayCategory.splice(index2,1);
                    wasDeleted=true;
                }
                if(index3!==-1){
                    weekCategory.splice(index3,1);
                    wasDeleted=true;
                }
                if(index4!==-1){
                    monthCategory.splice(index4,1);
                    wasDeleted=true;
                }    
                if(index5!==-1){
                    yearCategory.splice(index5,1);
                    wasDeleted=true;
                }           
                if(wasDeleted){
                    removedToDo.push(obj);
                }                                 
                console.log(JSON.parse(JSON.stringify(removedToDo)));
                
            })


        let card = document.createElement('div');
            if(card){
                card.classList.add('card');
                card.appendChild(buttonHolder);
            }

        let cardTitle = document.createElement('p');
            if(cardTitle){
                cardTitle.classList.add('cardTitle');
                cardTitle.textContent=obj.title;
                cardTitle.style.fontSize='1.5rem';
                cardTitle.style.textAlign='center';
                card.appendChild(cardTitle);
            }
        let cardDesc = document.createElement('p');
            if(cardDesc){
                cardDesc.classList.add("cardDesc");
                cardDesc.textContent=obj.description;
                cardDesc.style.textAlign='center';
                cardDesc.style.width='100%';
                card.appendChild(cardDesc);
                
            }
        cardHolder.appendChild(card);
    }

        sortButton.addEventListener('click', ()=>{
            cardHolder.textContent='';
            if(sort.value==='all'){
                for(const obj of all){
                    createCard(obj);

                }
            }
            else if(sort.value==='today'){
                for(const obj of todayCategory){
                    createCard(obj);
                }
                
            }
            else if(sort.value==='week'){
                for(const obj of weekCategory){
                    createCard(obj);
                }
            }
            else if(sort.value==='month'){
                for(const obj of monthCategory){
                    createCard(obj);
                }
            }
            else if(sort.value==='year'){
                for(const obj of yearCategory){
                    createCard(obj);
                }
            }
        })

}


export{uiStructure};