import Character from '../src/Character';

export default class Demon extends Character {
    constructor(name) {
        super(name, 'Demon');
        this.attack = 10;
        this.defence = 40
    }
}