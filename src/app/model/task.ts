//NB il ? rende una proprità NON obbligatoria
//NB il ! dice che la proprietà è obbligatoria ma non inizializzata e quindi viene forzatamente inizializzata a NULL da Angular

export class Task {
  id: string;
  name: string;
  comment?: string;
  tag?: string[];                      //type: array di stringhe --> se volessi un array generico --> any[]

  creationDate: Date;
  doneDate?: Date;                     //type: non un numero ma una data
  dueDate?: Date;

  priority: number;
  repeat?: number;

  constructor(id: string, name: string, priority: number= 0, creationDate?:number){ //priority è number ma se gli do un default, lo riconosce automaticamente
    this.name = name;
    this.priority = Task.getFirstNumber(priority);
    // this.priority = priority;
    if (creationDate) {
      this.creationDate = new Date(creationDate)
    } else {
      this.creationDate = new Date();                                       //prende la data di adesso (momento della creazione)
    }
    // this.id = name.split(" ")[0] + Task.generateRandomId();
    this.id = id;
  }


  static getFirstNumber(fullNumber: number): number{
    return parseInt(fullNumber.toString()[0]);
  }


  // static generateRandomId(): number{
  //   return Math.floor(Math.random()*1000000);
  // }
}



// let task = new Task("compra il pane", 2)
