


let main = document.querySelector('main');
let sidebar = document.createElement('div');
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
    // so important

    let username = new createSidebarElements('Username');
    let priority = new createSidebarElements('Priority');
    let finished = new createSidebarElements('Finished');
    let sortByDate = new createSidebarElements('Sort');







export{sidebar};