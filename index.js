class Agable {
  constructor(year) {
    this.year = year;
  }
    age() {
    const currentYear = new Date().getFullYear();
    }
      
}


class Company extends Agable{
    constructor(name, taxId, Agable, taxRate){
        this.name = name;
        this.id = taxId;
        this.year = Agable;
        this.taxRate = taxRate;
    }
}

class Person extends Agable{
    constructor(name, ssn, Agable, taxRate){
        this.name = name;
        this.id = ssn;
        this.year = Angable;
        this.taxRate = taxRate;
    }
}

class Car extends Agable{
    constructor(model, vin, Agable){
        this.name = model;
        this.id = vin;
        this.year = Agable;
    }
}


