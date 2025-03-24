import { test, expect } from '@jest/globals';

import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Demon } from '../src/Character';

test('characterConstructor correct', () => {
    const testCharacter = new Character('Lucifer', 'Demon');

    const correctCharacter = {
        _name: 'Lucifer',
        _type: 'Demon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('characterConstructor incorrectName', () => {
    expect(() => {
        new Character('Lucifer666666', 'Demon');
    }).toThrow('Name is incorrect O_o');
});

test('characterConstructor incorrectType', () => {
    expect(() => {
        new Character('Drakula', 'Vampire');
    }).toThrow('This type does not exist ._.');
});

test('characterGet name', () => {
    const testCharacter = new Character('Lucifer', 'Demon');

    const nameGet = testCharacter.name

    expect(nameGet).toBe('Lucifer');
});

test('characterGet type', () => {
    const testCharacter = new Character('Lucifer', 'Demon');

    const typeGet = testCharacter.type

    expect(typeGet).toBe('Demon');
});

test('characterLevelUp alive', () => {
    const testCharacter = new Character('Gandalf', 'Magician');

    testCharacter.levelUp();

    const correctCharacter = {
        _name: 'Gandalf',
        _type: 'Magician',
        attack: 12,
        defence: 48,
        health: 100,
        level: 2
    }

    expect(testCharacter).toEqual(correctCharacter);

});

test('characterLevelUp dead', () => {
    expect(() => {
        const testCharacter = new Character('Gandalf', 'Magician');
        testCharacter.health = 0;
        testCharacter.levelUp();
    }).toThrow('Sorry, your character is dead T-T');
});

test('characterDamage alive', () => {
    const testCharacter = new Character('Gandalf', 'Magician');
    testCharacter.damage(10);

    const correctHealth = 94;
    const testHealth = testCharacter.health;

    expect(testHealth).toEqual(correctHealth);

});

test('characterDamage dead', () => {
    expect(() => {
        const testCharacter = new Character('Gandalf', 'Magician');
        testCharacter.health = 0;
        testCharacter.damage(10);
    }).toThrow('You died x_x');
});

test('bowmanConstructor', () => {
    const testCharacter = new Bowman('Legolas');

    const correctCharacter = {
        _name: 'Legolas',
        _type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('swordsmanConstructor', () => {
    const testCharacter = new Swordsman('Aragorn');

    const correctCharacter = {
        _name: 'Aragorn',
        _type: 'Swordsman',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('magicianConstructor', () => {
    const testCharacter = new Magician('Gandalf');

    const correctCharacter = {
        _name: 'Gandalf',
        _type: 'Magician',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('undeadConstructor', () => {
    const testCharacter = new Undead('Nazgul');

    const correctCharacter = {
        _name: 'Nazgul',
        _type: 'Undead',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('zombieConstructor', () => {
    const testCharacter = new Zombie('Shaun');

    const correctCharacter = {
        _name: 'Shaun',
        _type: 'Zombie',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

test('demonConstructor', () => {
    const testCharacter = new Demon('Lucifer');

    const correctCharacter = {
        _name: 'Lucifer',
        _type: 'Demon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }

    expect(testCharacter).toEqual(correctCharacter);
});

