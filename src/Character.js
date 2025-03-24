class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1
    }

    set name(newName) {
        if (String(newName).length < 2 || String(newName).length > 10) {
            throw new Error('Name is incorrect');
        }

        this._name = newName;
    }

    get name() {
        return this._name;
    }
    
    set type(newtype) {
        const defenceObject = {
            Bowman: '25/25',
            Swordsman: '40/10',
            Magician: '10/40',
            Undead: '25/25',
            Zombie: '40/10',
            Demon: '10/40'
        };

        const types = Object.keys(defenceObject);
        
        if (!types.includes(newtype)) {
            throw new Error('This type does not exist');
        }

        const [attack, defence] = defenceObject[newtype].split('/');

        this._type = newtype;
        this.attack = attack;
        this.defence = defence;
        
    }
}

class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.health = 100;
        this.level = 1
    }
} 

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.health = 100;
        this.level = 1
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.health = 100;
        this.level = 1
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.health = 100;
        this.level = 1
    }
} 

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.health = 100;
        this.level = 1
    }
}

class Demon extends Character {
    constructor(name) {
        super(name, 'Demon');
        this.health = 100;
        this.level = 1
    }
}