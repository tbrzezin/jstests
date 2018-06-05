// https://jsbin.com/tuyuketepu/14/edit?js,console

const Movie = function(){
    this.initialize = function(movieLength, fullTitle, ageCategory, constructor){
        this.movieLength = movieLength;
        this.fullTitle = fullTitle;
        this.ageCategory = ageCategory;
        constructor.numberOfAllMovies = constructor.numberOfAllMovies ? constructor.numberOfAllMovies + 1 : 1;
    }
    this.addPrequel = function(prequel){
        this.prequel = prequel;
        prequel.sequel = this;
    }
    this.getFirstPart = function(){
        let moviePart = this;
        while(moviePart.prequel){
            moviePart = moviePart.prequel;
        }
        return moviePart;
    }
    this.getAllParts = function(){
        let moviePart = this.getFirstPart();
        const allParts = [moviePart];
        while(moviePart.sequel){
            moviePart = moviePart.sequel;
            allParts.push(moviePart);
        }
        return allParts;
    }
}
// użycie prototupów
const ActionMovie = function(movieLength, fullTitle, ageCategory){
    this.initialize(movieLength, fullTitle, ageCategory, ActionMovie);
}
ActionMovie.prototype = new Movie();

const DramaMovie = function(movieLength, fullTitle, ageCategory){
    this.initialize(movieLength, fullTitle, ageCategory, DramaMovie);
}
DramaMovie.prototype = new Movie();


function logAllMoviesOfType(type) {
    console.log(type.numberOfAllMovies)
}









//1)
const madMax = new ActionMovie(90,"Mad Max I", 16);

const requiemForADream = new DramaMovie(80,"Requiem For A Dream", 18);

//2)
const madMax2 = new ActionMovie(120,"Mad Max II", 16);
madMax2.addPrequel(madMax);


//3)
const madMax3 = new ActionMovie(110,"Mad Max III", 16);
madMax3.addPrequel(madMax2);
madMax3.getAllParts().forEach((part) => console.log(part.fullTitle))


// 4)
const superman = new ActionMovie(110,"Superman", 16);

logAllMoviesOfType(ActionMovie)


////////////////// funkcja automatycznie wywołująca się. Self-invo

var obj = (function sif() {
    var a = 'wartość prywatna. nie widoczna na zewnątrz'
    return {
        b: 'widoczne na zewnrząrz'
    }
})();

function outerFun(x) {
    var y = x + 7;
    return innerFx(z){
        console.log(x, y, z);
    }
}
var a = outerFun(1);
