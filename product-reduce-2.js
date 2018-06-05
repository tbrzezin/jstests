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
    new User('Marta',27,['plate','shoes'])]
    .filter(user => user.age > 18)
    .reduce((allProductsSoFar, user) =>

            user.cart.products.reduce((internalAcc, currProduct) => {
                //checking if a name already exist in Products object
                const isNotEmpty = Array.isArray(internalAcc.products[currProduct]);

                internalAcc.products[currProduct] =
                    isNotEmpty
                        //if exist a new name is added to an array
                        ? [...internalAcc.products[currProduct], user.name]
                        //if not an array with just one name is added
                        : [user.name];
                return internalAcc;

                //adding user name to product lists
            },  allProductsSoFar)

        //filling Products object with products from user
        , new Products())

console.log(products)