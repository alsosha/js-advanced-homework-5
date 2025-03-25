import { test, expect } from '@jest/globals';

import Character from '../src/Character';

test('characterConstructor correct', () => {
    const testCharacter = new Character('Lucifer', 'Demon');

    const correctCharacter = {
        _name: 'Lucifer',
        _type: 'Demon',
        attack: undefined,
        defence: undefined,
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
    testCharacter.attack = 10;
    testCharacter.defence = 40;

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
    testCharacter.attack = 10;
    testCharacter.defence = 40;

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

