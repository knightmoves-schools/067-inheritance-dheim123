class Agable {
  constructor(year) {
    this.year = year;
  }
    age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
    }
      
}


class Company extends Agable{
    constructor(name, taxId, yearEstablished, taxRate){
        this.name = name;
        this.id = taxId;
        super(yearEstablished);
        this.taxRate = taxRate;
    }
}

class Person extends Agable{
    constructor(name, ssn, birthYear, taxRate){
        this.name = name;
        this.id = ssn;
        super(birthYear);
        this.taxRate = taxRate;
    }
}

class Car extends Agable{
    constructor(model, vin, year){
        this.name = model;
        this.id = vin;
        super(year);
    }
}



