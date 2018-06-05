const users = [];
function User(name, wiek){
    this.name = name;
    this.wiek = wiek;
}
User.prototype.pelnoletni = function () {
    return this.age > 17;
}

User.prototype.register = function () {
    users.push(this);
}

User.prototype.getAllAdults = function() {
    console.log('computing');
    setTimeout(()=> users
        .filter(user=>user.pelnoletni())
        .forEach(user => clsole.log(user)
            , 5000));
}


var tomasz = new User(Tomasz, 16);