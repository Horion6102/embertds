export default class Contacts{
  data=[]
  constructor(data) {
    this.data=data;
  }

  get Contacts(){
    return this.data.filterBy('isDeleted', false);
  }

  get deleteds(){
    return this.data.filterBy('isDeleted', true);
  }

  get deletedCount(){
    return this.deleteds.length;
  }
}
