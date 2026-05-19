import{addPopUp} from './entryPopUp.js'


let main = document.querySelector('main');
let sidebar = document.createElement('div');

// Everything is tied to this variable. If it is exported, then all of the code associated 
// with it is exported also. GOOD TO KNOW. Do not need to export every single ounce of code.

    if(sidebar){
        sidebar.classList.add('sidebar');

    }


    class createSidebarElements{
        constructor(name){
            this.name=name;
            this.box=document.createElement('div');
            this.box.classList.add('sideBarElement');
            this.box.textContent=name;

            sidebar.appendChild(this.box);
        }

    }

    // Didn't realize that you could do this with constructors. Really Expands
    // what is possible with classes and why actual real world experience is 
    // so important (Appending and adding classes within a constructor).

    let username = new createSidebarElements('Username');
    let category = new createSidebarElements('Priority');
    let finished = new createSidebarElements('Finished');
    let sortByDate = new createSidebarElements('Sort');

    
    
    
    
    let addButton = document.createElement('div');
        if(addButton){
            addButton.classList.add('addButton');
            sidebar.appendChild(addButton);
        }


        addButton.addEventListener('click', addPopUp);

    let plusIcon = document.createElement('div');
        if(plusIcon){
            plusIcon.classList.add('plusIcon');
            addButton.appendChild(plusIcon);
        }

    let addText = document.createElement('h3');
        if(addText){
            addText.classList.add('addText');
            addText.textContent='Add a Task';
            addButton.appendChild(addText);
        }







export{sidebar};