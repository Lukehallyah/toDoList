
export class ToDos{

    constructor(titleValue, categoryValue, descriptionValue, notesValue){
        this.title=titleValue;
        this.category=categoryValue;
        this.description=descriptionValue;
        this.notes=notesValue;
        this.id=self.crypto.randomUUID();
    }



}