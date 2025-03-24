class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1
    }

    set name(newName) {
        if (String(newName).length < 2 || String(newName).length > 10) {
            throw new Error('Name is incorrect O_o');
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
            throw new Error('This type does not exist ._.');
        }

        const [attack, defence] = defenceObject[newtype].split('/');

        this._type = newtype;
        this.attack = Number(attack);
        this.defence = Number(defence);
        
    }

    get type() {
        return this._type;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Sorry, your character is dead T-T');
        }

        this.level++;
        this.attack = this.attack*1.2;
        this.defence = this.defence*1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('You died x_x');
        }

        this.health -= points * (1 - this.defence / 100);
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

export { Character, Bowman, Swordsman, Magician, Undead, Zombie, Demon };