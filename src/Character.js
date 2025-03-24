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
            Daemon: '10/40'
        };

        const types = Object.keys(defenceObject);
        
        if (!types.includes(newtype)) {
            throw new Error('This type does not exist');
        }

        this._type = newtype;
        this.defence = defenceObject[newtype];
    }
}