import { test, expect } from '@jest/globals';

import Undead from '../src/Undead';

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