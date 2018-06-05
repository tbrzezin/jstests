function safeItemOfSource(source, parent, methodList) {
    return class A extends parent {
        constructor(...params) {
            super(...params);
            methodList.forEach(
                method =>
                    (this[method] = source.isSafe
                        ? Object.getPrototypeOf(this)[method]
                        : () => undefined)
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

const SafeUser3 = safeItemOfSource({ isSafe: true }, User, ["show"]);

SafeUser3.show();