class User{
    constructor(name, age, products){
        this.name = name;
        this.age = age;
        this.cart = new Cart(products);
    }
}

class Cart{
    constructor(productNames){
        this.products = [...productNames];
    }
}

class Products{
    constructor(){
        this.products = {};
    }
    removeAll(){
        this.products = {};
    }
}


const products = [new User('Andrzej',11,['shoes','tv']),
    new User('Mateusz',17,['shoes','computer']),
    new User('Marcin',23,['shoes','tv', 'plate']),
    new User('Zofia',23,['phone','tv', 'plate']),
    new User('Marta',27,['plate','shoes'])];


console.log(products);

console.log(
    products
    // sprawdzanie wieku, czy person.age jest większe lub równe 18 lat
        .filter(person=> person.age >= 18)
        .reduce((acc,person) => {
            let lista = person.cart.products; // pobranie tablicy produktów
            lista.map(node => {
                acc[node] = acc[node] || [];
                acc[node].push(person.name)
            });
            return acc;
        }, {})
);

