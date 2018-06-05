function safeItemOfSource(source, parent, methodList) {
    return class A extends parent {
        constructor(...params) {
            super(...params);
            methodList.forEach(
                method =>
                    (this[method.name] = () => source.isSafe ? method.call(this) : undefined)
            );
        }
    };
}


class User {
    constructor() {
        this.x = 5;
    }
    show() {
        console.log(this.x);
    }
}

const SafeUser = safeItemOfSource({ isSafe: true }, User, [
    User.prototype.show
]);

const user = new SafeUser();
user.show();
