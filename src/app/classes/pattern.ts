export class Pattern {
    length: number;
    title: string;  
    structure: string[]; // i.e. ['C4', 'D4', 'E4', ...]
    id: number;
  
    constructor(id:number, length: number, title: string, structure: string[]) {
      this.id = id;
      this.length = length;
      this.title = title;
      this.structure = structure
    }
  }