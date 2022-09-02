export class BookModel {
  id : number
  name: string
  author: string
  description: string
  imageUrl : string

  constructor() {
    this.id = 0;
    this.name = '';
    this.author = '';
    this.description = '';
    this.imageUrl = '';
  }

}
