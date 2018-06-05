var Product = function(){
    var numberOfItemsLeft=0;
    this.show = function(){
        console.log(this.name + " " + this.producer + " " + numberOfItemsLeft);
    }
    this.checkAvaliability = function(){
        return !!numberOfItemsLeft;
    }
    this.diplayCode = function(code){
        return code + "#" + this.producer + "#" + this.name
    }
    this.incrementNumberOfItems = function(){
        numberOfItemsLeft++;
    }
    this.setNameAndProducer = function(name, producer){
        this.name = name;
        this.producer = producer;
    }
}

var ElectronicProduct = function(name, producer){
    this.incrementNumberOfItems();
    this.setNameAndProducer(name, producer);
    this.diplayCode = function(){
        return ElectronicProduct.prototype.diplayCode('elektronika');
    }
}
ElectronicProduct.prototype = new Product();

var GroceryProduct = function(name, producer){
    this.setNameAndProducer(name, producer);
    this.incrementNumberOfItems();
    this.diplayCode = function(){
        return GroceryProduct.prototype.diplayCode('zywnosc');
    }
}
GroceryProduct.prototype = new Product();




/////
//1. Stworzyc lancuch prototypow (konstruktory):
//produkt (wyswietl -> nazwa + producent + ilosc, sprawdzDostepnosc ->
//sprawdza czy sa jakies itemki danego typu [zywnosc, elektornika] )
//elektornika (wyswietl kod produktu -> elektornika # producent # nazwa)
//zywnosc (wyswietl kod produktu -> zywnosc # producent # nazwa)




var casioWatch = new ElectronicProduct('rx123', 'casio');
casioWatch.diplayCode()
var apples = new GroceryProduct('jablka', 'jablkopol');
