export default class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
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
        const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Demon'];
        
        if (!types.includes(newtype)) {
            throw new Error('This type does not exist ._.');
        }

        this._type = newtype;
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