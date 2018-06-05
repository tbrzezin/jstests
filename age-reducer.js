class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const ppl = [['aga', 15], ['wojtek', 18], ['lukasz', 18], ['andrzej', 24]];

// zrobic takie przeksztalcenie, ktore zwraca obiekt
// ktory posiada jeden klucz - najczesciej wystepujacy wiek
// jego wartosc to wszystkie instancje klasy Person, ktore posiadaja
// ten wiek. Instancje klasy, tworzone sa w oparciu o dane podane
// w tablicy ppl
// {18: [Person, Person]}

const ppl2 = ppl.map((item) => new Person(item[0], item[1]))
    .reduce((acc, person) => {
        let index = acc.findIndex((accItem) => accItem.age == person.age);
        if (index >= 0) {
            acc[index].people.push(person)
        }
        else {
            acc.push({
                age: person.age,
                people: [person]
            });
        }
        return acc;
    }, [])
    .reduce((acc, item) => {
        return item.people.length > acc.people.length ? item : acc;
    }, {age: 0, people: []});

const ppl3 = {
    [ppl2.age]: ppl2.people
};
// console.log(ppl3)


const ppl4 = ppl.map((item) => new Person(item[0], item[1]))
    .reduce((acc, person) => {
        let index = acc.findIndex((accItem) => accItem.age == person.age);
        if (index >= 0) {
            acc[index].people.push(person)
        }
        else {
            acc.push({
                age: person.age,
                people: [person]
            });
        }
        return acc;
    }, [])
    .reduce((acc, item) => {
        return item.people.length > acc[0].people.length ? [item] : acc;
    }, [{age: 0, people: []}])
    .map((item) => {
        return {
            [item.age]: item.people
        }
    })[0];

console.log(ppl4);